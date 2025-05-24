import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllRecipe from "../Pages/AllRecipe";
import AddRecipe from "../Pages/AddRecipe";
import MyRecipee from "../Pages/MyRecipee";
import Error from "../Pages/Error";
import DetailRecipe from "../Pages/DetailRecipe";
import AuthLayout from "../Layout/AuthLayout"
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      {
        index:true,
        path:"/",
        Component:Home
      },
      {
        path:"/allRecipe",
        loader: () => fetch("http://localhost:3000/recipeall"),
        Component: AllRecipe
      },
      {
        path:"/recipeDetails/:id",
        loader: ({params})=> fetch(`http://localhost:3000/recipe/${params.id}`),
        element:<ProtectedRoute><DetailRecipe/></ProtectedRoute>,
      },
      {
        path:"/addRecipe",
        element: <ProtectedRoute><AddRecipe/></ProtectedRoute>,
      },
      {
        path:"/myRecipe/:email",
        loader: ({params}) => fetch(`http://localhost:3000/recipe/${params.email}`),
         element: <ProtectedRoute><MyRecipee/></ProtectedRoute>,
      },
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        path: "/auth/registration",
        Component: Registration
      },
      {
        path: "/auth/login",
        Component: Login
      }
    ]
  },
  {
    path: "*",
    Component:Error
  }
]);