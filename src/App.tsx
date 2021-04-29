import { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import ContextContainer from "./context/ContextContainer";
import { pageRoutes } from "./routes";

export default function App() {
  const { pathname } = useLocation();

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
