import { createBrowserRouter, redirect } from "react-router";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import SignIn from "../pages/AuthPages/SignIn";
import GenService from "../services/GenService";

const router = createBrowserRouter([
  // Auth Layout
  {
    path: "/signin",
    element: <SignIn></SignIn>,
    loader: () => {
      if (localStorage.access_token) {
        //hapus
        console.log("You're already Sign In");
        GenService.alertInfo("You're already Sign In");
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <AppLayout></AppLayout>,
    loader: () => {
      if (!localStorage.access_token) {
        console.log("Please sign in first");
        GenService.alertError("Please Sign In first");
        return redirect("/signin");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
