import React from "react";
import RootProvider from "./root/RootProvider";
import OrderProvider from "./order/OrderProvider";
interface ContextProviderProps {
  children: React.ReactNode;
}
const ContextContainer = ({ children }: ContextProviderProps) => {
  return (
    <RootProvider>
      <OrderProvider>{children}</OrderProvider>
    </RootProvider>
  );
};

export default ContextContainer;
