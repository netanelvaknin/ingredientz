import { useContext } from "react";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";

function Checkout() {
  const {
    ingredients,
    price,
    setIngredients,
    incrementIngredientCount,
    decrementIngredientCount,
  }: any = useContext(OrderContext);
  console.log(price);
  console.log(ingredients);
  return <div></div>;
}

export default Checkout;
