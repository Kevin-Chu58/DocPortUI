import Community from "./views/Community";
import Docs from "./views/Docs";
import Home from "./views/Home";
import Inventory from "./views/Inventory";
import Login from "./views/Login";

const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "docs",
    path: "/docs",
    element: <Docs />,
  },
  {
    name: "inventory",
    path: "/inventory",
    element: <Inventory />,
  },
  {
    name: "community",
    path: "/community",
    element: <Community />,
  },
];

export default routes;
