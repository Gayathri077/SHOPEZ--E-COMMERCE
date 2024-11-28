import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../components/PrivateRoute";
import PaymentPage from "../pages/PaymentPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import AdminRoute from "../components/AdminRoute";
import OrderListPage from "../pages/admin/OrderListPage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import AdminDashboard from "../AdminDashboard";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import Dashboard from "../pages/admin/Dashboard";
import AdminProfilePage from "../pages/admin/AdminProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "/payment",
            element: <PaymentPage />,
          },
          {
            path: "/place-order",
            element: <PlaceOrderPage />,
          },
          {
            path: "/order/:id",
            element: <OrderDetailsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "",
    element: <AdminDashboard />,
    children: [
      {
        path: "",
        element: <AdminRoute />,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/admin/order-list",
            element: <OrderListPage />,
          },
          {
            path: "/admin/product/create",
            element: <ProductFormPage />,
          },
          {
            path: "/admin/profile",
            element: <AdminProfilePage />,
          },
          {
            path: "/admin/order/:id",
            element: <OrderDetailsPage />,
          },

          {
            path: "/admin/product/update/:id",
            element: <ProductFormPage />,
          },
        ],
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
