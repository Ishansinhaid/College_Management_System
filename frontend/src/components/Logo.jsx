import React from 'react';

const Logo = ({ className = "", size = "small", position = "top-left" }) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  const positionClasses = {
    "top-left": "absolute top-4 left-4 z-10",
    "top-right": "absolute top-4 right-4 z-10",
    "top-center": "absolute top-4 left-1/2 transform -translate-x-1/2 z-10",
    "bottom-left": "absolute bottom-4 left-4 z-10",
    "bottom-right": "absolute bottom-4 right-4 z-10",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
    "static": "inline-block"
  };

  return (
    <div className={`${positionClasses[position]} ${className} group`}>
      <div className="relative">
        <img
          src="/assets/logo.png"
          alt="College Management System Logo"
          className={`${sizeClasses[size]} object-contain opacity-90 hover:opacity-100 transition-all duration-500 filter drop-shadow-xl hover:drop-shadow-2xl transform hover:scale-110 hover:rotate-3`}
          style={{
            filter: 'brightness(1.1) contrast(1.2) saturate(1.1) drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default Logo;