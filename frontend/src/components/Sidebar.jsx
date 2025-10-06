import { NavLink } from "react-router-dom"; // or whatever routing you use
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { MdAccountBalance } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const links = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
    },
    {
      to: "/investments",
      label: "Investments",
      icon: <MdAccountBalance className="size-5" fill="currentColor" />,
    },
    {
      to: "/withdraw",
      label: "Withdraw",
      icon: (
        <svg viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
          <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
        </svg>
      ),
    },
  ];

  const { logout, isLoading } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen ${
        isExpanded ? "w-[280px]" : "w-20"
      } bg-white shadow-lg lg:relative transform transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-6 h-[80px] border-b border-gray-300 bg-white z-10">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="Logo"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2
                className={`text-2xl font-bold text-[#a06eff] ${
                  isExpanded ? "opacity-100" : "opacity-0"
                } transform transition-all duration-300 ease-in-out`}
              >
                Capitalspring
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="block text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? (
            <FaBars className="size-6" fill="currentColor" />
          ) : (
            <FaTimes className="size-6" fill="currentColor" />
          )}
        </button>
      </div>

      <nav className="flex flex-col p-4 justify-between h-[87%]">
        <div>
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={() => setIsExpanded(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg mb-2 h-[40px] gap-4 transition-colors ${
                  isActive || link.active
                    ? "bg-[#a06eff] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {link.icon}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </div>

        <div
          onClick={handleLogout}
          className="cursor-pointer h-[40px] flex gap-2 items-center p-3 rounded-lg mb-2 bg-gray-200 text-gray-700 hover:bg-[#a06eff] hover:text-white"
        >
          {(isLoading && (
            <div className="flex items-center justify-center animate-spin">
              <FiLoader className="size-5" />
            </div>
          )) || (
            <svg viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
              <path d="M215.5 332.8l29.9 29.9L352 256 245.3 149.3l-29.9 29.9 55.5 55.5H64v42.6h205.9l-54.4 55.5zM405.3 64H106.7C83.2 64 64 83.2 64 106.7V192h42.7v-85.3h298.6v298.6H106.7V320H64v85.3C64 428.8 83.2 448 106.7 448h298.6C428.8 448 448 428.8 448 405.3V106.7C448 83.2 428.8 64 405.3 64z" />
            </svg>
          )}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="Logout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Logout
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </aside>
  );
};
// h-[87%]

export default Sidebar;
