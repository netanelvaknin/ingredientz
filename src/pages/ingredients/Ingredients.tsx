import { useEffect, useContext } from "react";
import AxiosInstance from "../../api/instance";
import {
  IngredientModel,
  OrderContext,
} from "../../context/order/OrderProvider";
import { useHistory } from "react-router-dom";

function Ingredients() {
  const {
    ingredients,
    setIngredients,
    incrementIngredientCount,
    decrementIngredientCount,
  }: any = useContext(OrderContext);
  const history = useHistory();

  useEffect(() => {
    const getIngredients = async () => {
      const ingredients = await AxiosInstance.get("/salad-fake-api.json");

      // Initiate the state with count: 0 for each ingredient
      const initialIngredientsState = ingredients.data.items.map(
        ({ name, price }: IngredientModel) => {
          return {
            name,
            price,
            count: 0,
          };
        }
      );

      setIngredients(initialIngredientsState);
    };

    getIngredients();
  }, []);

  return (
    <div>
      {ingredients.map(
        ({ name, price, count }: IngredientModel, index: number) => {
          return (
            <p key={index}>
              <button onClick={() => incrementIngredientCount(index)}>
                Add
              </button>{" "}
              {name}, {price} , {count}
              <button onClick={() => decrementIngredientCount(index)}>
                Remove
              </button>
            </p>
          );
        }
      )}

      <button onClick={() => history.push("/checkout")}>Checkout</button>
    </div>
  );
}

export default Ingredients;
