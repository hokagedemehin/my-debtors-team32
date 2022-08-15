import React from 'react';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import SchoolListComp from '../components/SchoolListComp';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const SchoolList = () => {
  let navigate = useNavigate();

  const [cookies] = useCookies(['dma-cookies']);
  const handleRole = async () => {
    try {
      const token = cookies['dma-cookies'];
      const result1 = await axios.get(
        'http://localhost:8000/api/r/dj-rest-auth/user/',
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const result2 = await axios.get(
        `http://localhost:8000/api/r/school/${result1?.data?.pk}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      return result2?.data;
    } catch (error) {
      return error;
    }
  };
  useMount(async () => {
    const result = await handleRole();
    // console.log('result :>> ', result.message);
    if (cookies['dma-cookies'] && result?.message) {
      navigate('/contend');
    } else if (!cookies['dma-cookies']) {
      navigate('/signin');
    }
  });
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <div className='tw-pt-4'>
          <SchoolListComp />
        </div>
      </div>
    </div>
  );
};

export default SchoolList;
