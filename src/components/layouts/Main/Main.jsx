import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto">
      <NavBar></NavBar>
      <div className=" md:min-h-[calc(100vh-132px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
