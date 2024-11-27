import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./Root";
import ContactUs from "./pages/ContactUs";
import CustomerLogin from "./pages/CustomerLogin";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="/contact/Us" element={<ContactUs />}></Route>
      <Route path="/customer/Login" element={<CustomerLogin />}></Route>
      <Route path="/shopping/Cart" element={<ShoppingCart />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
