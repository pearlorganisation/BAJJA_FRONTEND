import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar2 />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
