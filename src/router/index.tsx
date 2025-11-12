import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { AppLayout } from "../app/layout/AppLayout";

import { AuthGuard } from "../shared/components/guards/AuthGuard";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const OrdersPage = lazy(() => import("../pages/Orders"));
const OrderDetailsPage = lazy(() => import("../pages/OrderDetails"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        ),
      },
      {
        path: "/orders",
        element: (
          <AuthGuard>
            <OrdersPage />
          </AuthGuard>
        ),
      },
      {
        path: "/orders/:id",
        element: (
          <AuthGuard>
            <OrderDetailsPage />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};