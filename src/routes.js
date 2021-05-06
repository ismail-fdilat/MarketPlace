import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
// importing Prooducts Components
const ALLProducts = React.lazy(() => import("./views/Products/AllProducts"));
const ADDProducts = React.lazy(() => import("./views/Products/AddProducts"));
const ADDExProducts = React.lazy(() => import("./views/Products/AddExProducts"));

const TheProduct = React.lazy(() => import("./views/Products/MProducts"));
const EditProduct = React.lazy(() => import("./views/Products/EditProduct"));
//importing Prooducts Components
const ALLOrders = React.lazy(() => import("./views/Orders/AllOrders"));
const ViewOrders = React.lazy(() => import("./views/Orders/MOrders"));
// const TheOrder = React.lazy(() => import("./views/Orders/MOrders"));

/// Routes
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/admin/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  // ADDing Prooducts Routes /////////
  {
    path: "/products/All-products",
    exact: true,
    name: "Products",
    component: ALLProducts,
  },
  {
    path: "/products/Add-products",
    exact: true,
    name: "Add products",
    component: ADDProducts,
  },
  {
    path: "/products/Add-extern-products",
    exact: true,
    name: "Add extern products",
    component: ADDExProducts,
  },
  {
    path: "/products/:id",
    exact: true,
    name: "Product Details",
    component: TheProduct,
  },
  {
    path: "/products/edit/:id",
    exact: true,
    name: "Product Details",
    component: EditProduct,
  },
  // ADDing Orders Routes /////////
  {
    path: "/orders/All-orders",
    exact: true,
    name: "Orders",
    component: ALLOrders,
  },
  {
    path: "/orders/:id",
    exact: true,
    name: "Order",
    component: ViewOrders,
  }
];

export default routes;
