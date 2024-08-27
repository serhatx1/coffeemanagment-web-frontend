import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Pages/Landing';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BeverageForm from './Pages/CreateCoffee';
import OrderCoffee from './Pages/Order';
import { Navbar } from './Pages/Navbar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/coffee/create",
    element: <BeverageForm/>,
  },
  {
    path: "/coffee/order",
    element: <OrderCoffee/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Navbar/>

    <RouterProvider router={router} />
  </React.StrictMode>
);
