import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import Footer from "../../shared/Footer/Footer";

const Main = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto p-1">
      <NavBar></NavBar>
      <div className="min-h-screen md:min-h-[calc(100vh-132px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
