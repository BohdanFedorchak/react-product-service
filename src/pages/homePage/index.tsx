import Card from "@/components/Card";
import { useProducts } from "@/hooks/useProducts";

export default function HomePage() {
  const { data, isLoading, error } = useProducts();
  if (error) return <div>Error</div>;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const { products } = data;
    return (
      <>
        {products && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                desctiption={product.description}
                price={product.price}
                img={product?.images?.[0] || product.thumbnail}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}
