from django.urls import path
from .views import *

urlpatterns = [
    path('create-message', question.as_view({'post':'create'})),
    path('delete-message/<int:pk>', question.as_view({'delete':'destroy'})),
    path('get-message/<int:pk>', question.as_view({'get':'retrieve'})),
    path('all-message', question.as_view({'get':'list'})),

    path('tech-info',techInfo.as_view({'get':'list'})),
    path('tech-info/<int:pk>', techInfo.as_view({'put','update'})),

    path('all-products', ourWork.as_view({'get':'list'})),
    path('create-product', ourWork.as_view({'post':'create'})),
    path('delete-product/<int:pk>', ourWork.as_view({'delete':'destroy'})),
    path('update-product/<int:pk>', ourWork.as_view({'put':'update'})),

    path('all-woods', wood.as_view({'get':'list'})),
    path('create-woods', wood.as_view({'post','create'})),
    path('wood/<int:pk>', wood.as_view({'delete':'destroy'})),
    path('wood/<int:pk>', wood.as_view({'put':'update'})),
]
