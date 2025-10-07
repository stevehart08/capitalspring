import logo from "../assets/logo-GZFfKnm8.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const cryptoData = [
  { symbol: "BTC", price: "$121,764", change: "-0.7%" },
  { symbol: "ETH", price: "$4,458.25", change: "-1.0%" },
  { symbol: "SOL", price: "$226.42", change: "-2.6%" },
  { symbol: "ADA", price: "$0.8363", change: "-3.9%" },
  { symbol: "XRP", price: "$2.95", change: "-3.4%" },
  { symbol: "DOT", price: "$4.17", change: "-3.1%" },
  { symbol: "DOGE", price: "$0.2488", change: "-3.9%" },
  { symbol: "AVAX", price: "$30", change: "-3.7%" },
  { symbol: "LINK", price: "$21.9", change: "-2.8%" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonies", href: "/testimonies" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed w-full bg-white border-b border-gray-300 py-4 md:py-3 pb-0 z-50 transition-transform duration-300 delay-100"
    >
      <div className="relative flex items-center justify-between p-2.5 lg:pl-5 backdrop-blur-md">
        {/* Logo */}
        <Link
          className="h-9 md:h-8 lg:h-10 object-cover overflow-hidden"
          to="/"
        >
          <img src={logo} alt="Logo" className="h-full object-contain" />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-200 h-7 lg:h-10 px-2 lg:px-4 text-xs rounded-xl lg:rounded-full ${
                  isActive || href.active
                    ? "bg-[#a06eff] text-white"
                    : "text-black hover:bg-[#f0f0f0]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right Buttons */}
        {(isAuthenticated && (
          <div className="hidden md:flex">
            <div className="relative lg:w-24">
              <Link
                to="/dashboard"
                className="inline-flex items-center rounded-4xl lg:rounded-full bg-[#a06eff] text-white px-3 lg:px-6 py-3 text-sm font-bold transform transition-all duration-700 ease-in-out group relative overflow-hidden"
              >
                <span className="z-10 relative">Dashboard</span>
                <MdChevronRight className="hidden lg:block z-10 relative opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-700 ease-in-out" />
                <div className="absolute rounded-full inset-0 bg-gradient-to-r from-[#a06eff] to-[#8057cc] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
              </Link>
            </div>
          </div>
        )) || (
          <div className="hidden md:flex gap-4">
            {/* Login */}
            <div className="relative lg:w-24">
              <Link
                to="/signin"
                className="inline-flex items-center rounded-xl lg:rounded-full bg-gray-100 text-black px-4 lg:px-6 py-3 text-sm font-bold transform transition-all duration-700 ease-in-out group relative overflow-hidden"
              >
                <span className="z-10 relative">Login</span>
                <MdChevronRight className="hidden lg:block z-10 relative opacity-0 group-hover:opacity-100 transform transition-transform duration-700 ease-in-out group-hover:translate-x-2" />
                <div className="absolute rounded-full inset-0 bg-gradient-to-r from-gray-200 to-gray-300 hidden group-hover:block transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"></div>
              </Link>
            </div>

            {/* Register */}
            <div className="relative lg:w-44">
              <Link
                to="/signup"
                className="inline-flex items-center rounded-xl lg:rounded-full bg-[#a06eff] text-white px-3 lg:px-6 py-3 text-sm font-bold transform transition-all duration-700 ease-in-out group relative overflow-hidden"
              >
                <span className="z-10 relative">Register Now</span>
                <MdChevronRight className="hidden lg:block z-10 relative opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-700 ease-in-out" />
                <div className="absolute rounded-full inset-0 bg-gradient-to-r from-[#a06eff] to-[#8057cc] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#a06eff] text-3xl pr-3"
        >
          <MdMenu />
        </button>
      </div>

      {/* Crypto Ticker */}
      <div className="w-full border-y border-[#a06eff] bg-[#f5f4f4] overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-1">
          <div className="scroll-content flex">
            {cryptoData
              .concat(cryptoData)
              .map(({ symbol, price, change }, idx) => (
                <div
                  key={`${symbol}-${idx}`}
                  className="inline-flex items-center mx-4"
                >
                  <span className="text-gray-400 font-medium">{symbol}</span>
                  <span className="text-purple-600 ml-2">{price}</span>
                  <span className="ml-2 text-red-400">{change}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </motion.div>
  );
};

const MobileMenu = ({ onClose }) => {
  const { isAuthenticated } = useAuthStore();

  return (
    <motion.div
      className="fixed inset-0 bg-white z-40 md:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3 }}
      style={{ animationFillMode: "forwards" }}
    >
      <div className="flex flex-col px-6 py-12 h-full overflow-auto">
        {/* Close Button */}
        <div className="flex justify-end absolute top-8 right-10">
          <button onClick={onClose} className="text-[#a06eff] text-3xl">
            <IoClose />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow mt-12 space-y-2">
          {navLinks.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              onClick={onClose}
              className={({ isActive }) =>
                `block py-4 text-2xl font-semibold border-b border-gray-200 transition-colors duration-300 ${
                  isActive || href.active
                    ? "px-5 text-[#a06eff] bg-[#f0f0f0]"
                    : "text-gray-800 hover:text-[#a06eff]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Bottom Buttons */}
        {(isAuthenticated && (
          <div className="pb-12 pt-10">
            <Link
              to="/dashboard"
              onClick={onClose}
              className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-[#a06eff] text-white px-6 py-4 text-base font-bold transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <FaRegStar />
              Dashboard
            </Link>
          </div>
        )) || (
          <div className="space-y-4 pb-12">
            <Link
              to="/signin"
              onClick={onClose}
              className="block w-full text-center rounded-full border border-[#a06eff] text-[#a06eff] px-6 py-4 text-base font-bold hover:bg-[#a06eff] hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={onClose}
              className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-[#a06eff] text-white px-6 py-4 text-base font-bold transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <FaRegStar />
              Register Now
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
