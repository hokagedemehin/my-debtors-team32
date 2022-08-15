from rest_framework import serializers
from .models import Records, RegistrationClass, ContendForm
from django.contrib.auth import get_user_model


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Records


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationClass
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "username",
        )


class ContendSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContendForm
        fields = "__all__"
