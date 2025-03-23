import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import useRandomProducts from '../../hooks/useRandomProducts';
import type { Product } from '../../types/';

export default function CategoryPage() {
  const { category } = useParams();
  const { products, loading } = useRandomProducts();

  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === category?.toLowerCase()
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-[#468847] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 capitalize">{category}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        ) : (
          categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}