import { lazy, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContextContainer from "./context/ContextContainer";
const LandingPage = lazy(() => import("./pages/landing-page/LandingPage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Ingredients = lazy(() => import("./pages/ingredients/Ingredients"));

export default function App() {
  const { pathname } = useLocation();

  const pageRoutes = [
    { path: "/", component: <LandingPage /> },
    { path: "/ingredients", component: <Ingredients /> },
    { path: "/checkout", component: <Checkout /> },
  ];

  useEffect(() => {
    // Scroll to the top of the page everytime page changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ContextContainer>
      <Navbar />
      <Switch>
        {pageRoutes.map(({ path, component }) => {
          return (
            <Route exact path={path} key={path}>
              {component}
            </Route>
          );
        })}
      </Switch>
    </ContextContainer>
  );
}
