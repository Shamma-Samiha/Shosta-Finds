from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'description', 'category']
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        category = request.query_params.get('category', None)
        if category:
            products = Product.objects.filter(category=category)
            serializer = self.get_serializer(products, many=True)
            return Response(serializer.data)
        return Response({'error': 'Category parameter required'}, status=400)
