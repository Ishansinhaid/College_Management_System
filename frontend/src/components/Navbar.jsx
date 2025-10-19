import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <div className="glass-strong px-6 py-4 mb-6 border-b border-white/20 animate-fade-in-up">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div className="flex items-center group">
          <Logo size="small" position="static" className="mr-4 animate-float" />
          <p
            className="font-bold text-2xl flex justify-center items-center cursor-pointer text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            <span className="mr-2 text-blue-600 group-hover:animate-pulse">
              <RxDashboard />
            </span>{" "}
            {router.state && router.state.type} Dashboard
          </p>
        </div>
        <CustomButton
          variant="danger"
          onClick={logouthandler}
          size="medium"
          className="animate-slide-in-right"
        >
          Logout
          <span className="ml-2">
            <FiLogOut />
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
