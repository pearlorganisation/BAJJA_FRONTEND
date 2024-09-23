import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/DefaultLayout/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductListing from "../pages/ProductListing/ProductListing";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import Auth from "../pages/Authentication/Auth";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import CreateAd from "../pages/Buyer/CreateAd/CreateAd";
import ProductCategorySection from "../components/ProductCategorySection/ProductCategorySection";
import AddToCart from "../pages/Home/AddToCart/AddToCart";
import HomePage_Categories_Services_Goods from "../pages/HomePage_Categories_Services_Goods/HomePage_Categories_Services_Goods";
import ProtectedRoute from "./ProtechtedRoute/ProtectedRoute";
import UserDetails from "../pages/Authentication/UserDetails/UserDetails";
import CreateNewPassword from "../pages/Authentication/UserDetails/CreateNewPassword";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: ":type",
        element: (
          <ProtectedRoute>
            <HomePage_Categories_Services_Goods />
          </ProtectedRoute>
        ),
      },
      {
        path: "about_us",
        element: <About />,
      },
      {
        path: "contact_us",
        element: <Contact />,
      },
      {
        path: ":type/:servicename/:subtitle",
        element: <ProductListing />,
      },
      
      {
        path: "addToCart",
        element: (
          <ProtectedRoute>
            <AddToCart />
          </ProtectedRoute>
        ),
      }
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/userDetails",
    element: <UserDetails />,
  },
  {
    path:"/create-new-password",
    element:<CreateNewPassword/>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/create-ad",
    element: <CreateAd />,
  },
  {
    path: "/prod-cat",
    element: <ProductCategorySection />,
  },
]);

export default routes;
