import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./pages/FirstPage.jsx";
import SneakersPage from "./pages/SneakersPage.jsx";
import PantsPage from "./pages/PantsPage.jsx";
import ProductView from "./pages/ProductView";
import CartPage from "./pages/CartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/sneakers",
    element: <SneakersPage />,
  },
  {
    path: "/pants",
    element: <PantsPage />,
  },
  {
    path: "/productview",
    element: <ProductView />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
