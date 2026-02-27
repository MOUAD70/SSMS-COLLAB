import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/errors/NotFound";
import Unauthorized from "../pages/errors/Unauthorized";
import { UNAUTHORIZED_ROUTE } from "./routes";

export const router = createBrowserRouter([
  {
    path: UNAUTHORIZED_ROUTE,
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
