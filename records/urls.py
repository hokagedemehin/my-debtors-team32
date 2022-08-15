from django.urls import path
from .views import (
    RecordSearchFilter,
    UserViewSet,
    RecordView,
    Registration,
    SchoolInfo,
    ContendView,
)
from rest_framework.routers import SimpleRouter


app_name = "records"

router = SimpleRouter()
router.register("users", UserViewSet, basename="users")
router.register("register", Registration, basename="users")
router.register("school", SchoolInfo, basename="users")
router.register("search", RecordSearchFilter, basename="search")
router.register("dashboard", RecordView, basename="posts")
router.register("contend", ContendView, basename="contend")

urlpatterns = router.urls

# urlpatterns = [
#     path('<int:pk>/', RecordDetail.as_view()),
#     path('', RecordList.as_view()),
#     path('users/', UserList.as_view()), # new
#     path('users/<int:pk>/', UserDetail.as_view()),
# ]
