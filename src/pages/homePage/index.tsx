import Button from "@/components/Button";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { useRequestWithPagination } from "@/hooks/useRequestWithPagination";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { data, isLoading, error } = useRequestWithPagination(
    "products",
    0,
    20
  );
  const navigator = useNavigate();

  const productsList = data?.[0]?.products || [];

  if (error) return <div>Error</div>;

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <>
        {productsList && (
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 mb-4">
              {productsList.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  desctiption={product.description}
                  price={product.price}
                  img={product?.images?.[0] || product.thumbnail}
                />
              ))}
            </div>
            <div className="w-[200px] self-center">
              <Button color="black" onClick={() => navigator("products")}>
                Show all products
              </Button>
            </div>
          </div>
        )}
      </>
    );
  }
}
