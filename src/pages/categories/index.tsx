//import { useInfifityProducts } from "@/hooks/useInfinityProducts";
//import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CategoriesPage() {
  // const [pageStart, setPageStart] = useState(10);
  // const { data } = useInfifityProducts(pageStart);

  // const productsList = data?.[0].products;

  // console.log(data);
  return (
    <div>
      {/* {productsList &&
        productsList.map((product) => <div key={product}> {product.id} </div>)}
      <button onClick={() => setPageStart(pageStart + 10)}>
        Загрузить ещё
      </button> */}
      <NavLink to="/">Link</NavLink>
    </div>
  );
}
