import { lazy } from "react";
const LandingPage = lazy(() => import("./pages/landing-page/LandingPage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Ingredients = lazy(() => import("./pages/ingredients/Ingredients"));

export const pageRoutes = [
  { path: "/", component: <LandingPage /> },
  { path: "/ingredients", component: <Ingredients /> },
  { path: "/checkout", component: <Checkout /> },
];
