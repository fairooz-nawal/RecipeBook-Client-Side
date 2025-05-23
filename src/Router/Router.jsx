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
        Component: AllRecipe
      },
      {
        path:"/addRecipe",
        Component: AddRecipe
      },
      {
        path:"/myRecipe",
        Component: MyRecipee
      },
    ]
  },
  {
    path: "*",
    Component:Error
  }
]);