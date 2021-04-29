import React from "react";
import OrderProvider from "./order/OrderProvider";
interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextContainer = ({ children }: ContextProviderProps) => {
  return <OrderProvider>{children}</OrderProvider>;
};

export default ContextContainer;
