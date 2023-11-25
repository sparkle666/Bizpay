import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx';
import LandingPage from './pages/LandingPage.tsx';
import Dashboard from './pages/Dashboard/Dashboard';
import Invoice from './pages/Invoice/Invoice.tsx';
import Clients from './pages/Clients/Clients.tsx';
import Payment from './pages/Payment/Payment.tsx';
import Notifications from './pages/Notifications/Notifications.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clients",
    element: <Clients />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/payment",
    element: <Payment />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
