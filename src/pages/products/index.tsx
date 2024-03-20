import Button from "@/components/Button";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import useProducts from "@/hooks/useProducts";
import useQueryParams from "@/hooks/useQueryParams";
import { IProduct } from "@/interfaces/product";
import { useEffect, useState } from "react";

export default function Products() {
  const [metaPage, setPageLimit] = useState({ limit: 10, skip: 0 });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isMounted, setIsMounted] = useState(true);

  const defaultMeta = { limit: 10, skip: 0 };

  const { setQueryParam, getAllQueryParams } = useQueryParams();
  const {
    products: productsRequest,
    error,
    isLoadedAll,
    isLoadingNewProducts,
  } = useProducts({
    limit: metaPage.limit,
    skip: metaPage.skip,
  });

  useEffect(() => {
    const { limit = defaultMeta.limit, skip = defaultMeta.skip } =
      getAllQueryParams();
    if (limit || skip) {
      setPageLimit((prevState) => {
        return { ...prevState, ...{ limit: Number(skip) + Number(limit) } };
      });
    }
  }, []);

  useEffect(() => {
    if (productsRequest.length) {
      setProducts((prevProducts) => [...prevProducts, ...productsRequest]);
      setQueryParam("limit", metaPage.limit + "");
      setQueryParam("skip", metaPage.skip + "");
      setIsMounted(false);
    }
  }, [productsRequest]);

  if (error) return <div>Error</div>;
  if (isMounted) return <Loader />;

  if (products.length) {
    return (
      <>
        {products && (
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 mb-4">
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
            {products.length && (
              <div className="w-[200px] self-center">
                {isLoadingNewProducts && <Loader />}
                {!isLoadingNewProducts && !isLoadedAll && (
                  <Button
                    color="black"
                    onClick={() =>
                      setPageLimit((prevState) => {
                        return {
                          ...prevState,
                          ...{ limit: defaultMeta.limit },
                          ...{
                            skip:
                              prevState.limit == defaultMeta.limit
                                ? prevState.skip + defaultMeta.limit
                                : metaPage.limit,
                          },
                        };
                      })
                    }
                  >
                    Show more
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}
