from django.core.management.base import BaseCommand
from catalog.models import Product

class Command(BaseCommand):
    help = 'Load sample products into the database'

    def handle(self, *args, **kwargs):
        # Clear existing products
        Product.objects.all().delete()
        
        # Sample products for Men
        men_products = [
            {
                'name': 'Classic Denim Jacket',
                'description': 'Timeless denim jacket with a modern fit. Perfect for casual outings.',
                'price': 79.99,
                'category': 'men',
                'image_url': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
                'stock': 25,
                'is_featured': True,
                'rating': 4.5
            },
            {
                'name': 'Premium Cotton T-Shirt',
                'description': 'Soft, breathable cotton t-shirt in multiple colors.',
                'price': 24.99,
                'category': 'men',
                'image_url': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
                'stock': 50,
                'is_featured': False,
                'rating': 4.3
            },
            {
                'name': 'Slim Fit Chinos',
                'description': 'Versatile chinos that work for both casual and formal occasions.',
                'price': 59.99,
                'category': 'men',
                'image_url': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500',
                'stock': 30,
                'is_featured': True,
                'rating': 4.6
            },
            {
                'name': 'Leather Sneakers',
                'description': 'Comfortable leather sneakers with premium craftsmanship.',
                'price': 89.99,
                'category': 'men',
                'image_url': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
                'stock': 20,
                'is_featured': False,
                'rating': 4.7
            }
        ]
        
        # Sample products for Women
        women_products = [
            {
                'name': 'Floral Summer Dress',
                'description': 'Light and breezy floral dress perfect for summer days.',
                'price': 64.99,
                'category': 'women',
                'image_url': 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
                'stock': 35,
                'is_featured': True,
                'rating': 4.8
            },
            {
                'name': 'Elegant Blouse',
                'description': 'Sophisticated blouse suitable for office and evening wear.',
                'price': 44.99,
                'category': 'women',
                'image_url': 'https://images.unsplash.com/photo-1564257577054-9a6a0e1c9d46?w=500',
                'stock': 40,
                'is_featured': False,
                'rating': 4.4
            },
            {
                'name': 'High-Waisted Jeans',
                'description': 'Flattering high-waisted jeans with stretch comfort.',
                'price': 69.99,
                'category': 'women',
                'image_url': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500',
                'stock': 45,
                'is_featured': True,
                'rating': 4.6
            },
            {
                'name': 'Leather Handbag',
                'description': 'Classic leather handbag with multiple compartments.',
                'price': 119.99,
                'category': 'women',
                'image_url': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
                'stock': 15,
                'is_featured': True,
                'rating': 4.9
            }
        ]
        
        # Sample products for Kids
        kids_products = [
            {
                'name': 'Colorful Hoodie',
                'description': 'Warm and cozy hoodie with fun designs for kids.',
                'price': 34.99,
                'category': 'kids',
                'image_url': 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500',
                'stock': 40,
                'is_featured': True,
                'rating': 4.5
            },
            {
                'name': 'Kids Sneakers',
                'description': 'Durable and comfortable sneakers for active kids.',
                'price': 39.99,
                'category': 'kids',
                'image_url': 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500',
                'stock': 35,
                'is_featured': False,
                'rating': 4.4
            },
            {
                'name': 'Denim Overalls',
                'description': 'Adorable denim overalls perfect for playtime.',
                'price': 44.99,
                'category': 'kids',
                'image_url': 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500',
                'stock': 25,
                'is_featured': False,
                'rating': 4.6
            }
        ]
        
        # Sample products for Plants
        plants_products = [
            {
                'name': 'Monstera Deliciosa',
                'description': 'Beautiful tropical plant with large, split leaves.',
                'price': 49.99,
                'category': 'plants',
                'image_url': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500',
                'stock': 20,
                'is_featured': True,
                'rating': 4.7
            },
            {
                'name': 'Snake Plant',
                'description': 'Low-maintenance plant perfect for beginners.',
                'price': 29.99,
                'category': 'plants',
                'image_url': 'https://images.unsplash.com/photo-1593482892540-73c6b5ab4e16?w=500',
                'stock': 30,
                'is_featured': True,
                'rating': 4.8
            },
            {
                'name': 'Fiddle Leaf Fig',
                'description': 'Stunning indoor tree with large, violin-shaped leaves.',
                'price': 79.99,
                'category': 'plants',
                'image_url': 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=500',
                'stock': 15,
                'is_featured': False,
                'rating': 4.6
            },
            {
                'name': 'Pothos Plant',
                'description': 'Easy-to-care-for trailing plant, great for hanging baskets.',
                'price': 19.99,
                'category': 'plants',
                'image_url': 'https://images.unsplash.com/photo-1614594895304-fe7116ac7f2e?w=500',
                'stock': 40,
                'is_featured': False,
                'rating': 4.5
            }
        ]
        
        # Sample products for Home Decor
        home_decor_products = [
            {
                'name': 'Minimalist Wall Art',
                'description': 'Modern abstract wall art to elevate any room.',
                'price': 89.99,
                'category': 'home_decor',
                'image_url': 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500',
                'stock': 25,
                'is_featured': True,
                'rating': 4.7
            },
            {
                'name': 'Ceramic Vase Set',
                'description': 'Set of 3 elegant ceramic vases in neutral tones.',
                'price': 54.99,
                'category': 'home_decor',
                'image_url': 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
                'stock': 30,
                'is_featured': False,
                'rating': 4.5
            },
            {
                'name': 'Scented Candles Set',
                'description': 'Luxury scented candles in beautiful glass containers.',
                'price': 39.99,
                'category': 'home_decor',
                'image_url': 'https://images.unsplash.com/photo-1602874801006-96ef1c4f9bb4?w=500',
                'stock': 50,
                'is_featured': True,
                'rating': 4.8
            },
            {
                'name': 'Throw Pillow Set',
                'description': 'Cozy decorative pillows to add comfort and style.',
                'price': 44.99,
                'category': 'home_decor',
                'image_url': 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500',
                'stock': 35,
                'is_featured': False,
                'rating': 4.6
            }
        ]
        
        # Combine all products
        all_products = men_products + women_products + kids_products + plants_products + home_decor_products
        
        # Create products
        for product_data in all_products:
            Product.objects.create(**product_data)
        
        self.stdout.write(self.style.SUCCESS(f'Successfully loaded {len(all_products)} products'))
