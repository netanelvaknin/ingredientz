import React, { useState, createContext } from "react";

export interface IngredientModel {
  name: string;
  price: number;
  count: number;
}

export interface IOrderContext {
  ingredients: IngredientModel[];
  setIngredients: (ingredients: IngredientModel[]) => void;
  incrementIngredientCount: (index: number) => void;
  decrementIngredientCount: (index: number) => void;
  price: number;
  setPrice: (price: number) => void;
}

export const OrderContext = createContext<IOrderContext | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}

const MAX_INGREDIENT_COUNT = 10;
const MIN_INGREDIENT_COUNT = 0;

export const OrderProvider = ({ children }: RootProviderProps) => {
  const [ingredients, setIngredients]: any = useState<IngredientModel[]>([]);
  const [price, setPrice] = useState(0);

  const incrementIngredientCount = (index: number) => {
    if (ingredients[index].count < MAX_INGREDIENT_COUNT) {
      const copy: any = [...ingredients];
      copy[index].count = copy[index].count + 1;
      copy[index].price = copy[index].price * 2;

      setIngredients(copy);
      calculatePrice();
    }
  };

  const decrementIngredientCount = (index: number) => {
    if (ingredients[index].count > MIN_INGREDIENT_COUNT) {
      const copy: any = [...ingredients];
      copy[index].count = copy[index].count - 1;
      copy[index].price = copy[index].price / 2;

      setIngredients(copy);
      calculatePrice();
    }
  };

  const calculatePrice = () => {};

  return (
    <OrderContext.Provider
      value={{
        ingredients,
        setIngredients,
        incrementIngredientCount,
        decrementIngredientCount,
        price,
        setPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
