import React, { useState, createContext } from "react";

interface IRootContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const RootContext = createContext<IRootContext | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}
export const RootProvider = ({ children }: RootProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <RootContext.Provider value={{ loading, setLoading }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
