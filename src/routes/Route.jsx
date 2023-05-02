import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Main from "../components/layouts/Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/LoginPage/Login";
import SignUp from "../components/LoginPage/SignUp";
import ChefRecipes from "../components/Chef-Recipes-page/ChefRecipes";
import Blog from "../components/BlogPage/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://the-pasta-people-server-akashislam1.vercel.app/chefdata"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/chefRecipes/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ), // private route
        loader: ({ params }) =>
          fetch(
            `https://the-pasta-people-server-akashislam1.vercel.app/chefdata/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
