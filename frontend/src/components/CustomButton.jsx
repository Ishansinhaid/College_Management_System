import React from "react";

const CustomButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  size = "medium",
  fullWidth = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25";
      case "secondary":
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-gray-500/25";
      case "success":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-green-500/25";
      case "warning":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 shadow-yellow-500/25";
      case "danger":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-red-500/25";
      case "glass":
        return "glass text-gray-800 hover:bg-white/30 border-white/20";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1.5 text-xs";
      case "medium":
        return "px-4 py-2 text-sm";
      case "large":
        return "px-6 py-3 text-base";
      default:
        return "px-4 py-2 text-sm";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : ''}
        rounded-xl
        font-semibold
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        transform hover:-translate-y-1 hover:scale-105
        active:translate-y-0 active:scale-100
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md
        flex items-center justify-center gap-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        ${getVariantClasses()}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default CustomButton;
