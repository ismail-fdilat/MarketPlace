import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
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
