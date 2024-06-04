import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StaffLayout from './layouts/StaffLayout';
import Order from './pages/staffs/Order';
import Product from './pages/staffs/Product';
import History from './pages/staffs/History';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<StaffLayout />}
      >
        <Route >
          <Route index element={<Order />} />
          <Route
            path="staffOrder"
            element={<Order />}
          />
          <Route
            path="staffProduct"
            element={<Product />}
          />
          <Route
            path="staffHistory"
            element={<History />}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
