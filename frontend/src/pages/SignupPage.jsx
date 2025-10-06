import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";

const SignupForm = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const f_name = e.target.f_name.value;
    const l_name = e.target.l_name.value;
    const name = `${f_name} ${l_name}`;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    if (!email) {
      return toast.error("Enter your email", { id: "error1" });
    }

    if (!f_name) {
      return toast.error("Enter your fullname", { id: "error1" });
    }

    if (!password) {
      return toast.error("Enter new password", { id: "error1" });
    }

    if (password !== password2 || !password2) {
      return toast.error("Passwords do not match", { id: "error1" });
    }



    try {
      await signup(email, password, name);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message, { id: "error1" });
      console.log(error);
    }
  };

  return (
    <div className="mt-[100px] flex items-center w-full justify-center bg-gradient-to-b from-white to-[#f8f8f8] px-4 py-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-4">
            <FaUserPlus className="text-[#6a5acd]" />
            Sign Up
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <div className="w-full md:w-1/2">
                <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                  <FaUserAlt /> First Name
                </label>
                <input
                  type="text"
                  name="f_name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                  placeholder="Enter first name"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                  <FaUserAlt /> Last Name
                </label>
                <input
                  type="text"
                  name="l_name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                <MdEmail /> Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                <FaLock /> Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                  placeholder="Enter your password"
                />
                <TogglePasswordIcon />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                <FaLock /> Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password2"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                  placeholder="Confirm your password"
                />
                <TogglePasswordIcon />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6a5acd] text-white py-3 rounded-lg hover:bg-[#5a4abd] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {(isLoading && (
                <div className="flex items-center justify-center animate-spin">
                  <FiLoader size={22} />
                </div>
              )) ||
                "Sign Up"}
            </button>

            {/* Link to Sign In */}
            <div className="text-center mt-5">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-[#6a5acd] hover:underline font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="rb_13-DUkSMC4B.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const TogglePasswordIcon = () => (
  <button
    type="button"
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#6a5acd] transition duration-300"
  >
    <FaEyeSlash />
  </button>
);

const SignupPage = () => {
  return (
    <div className=" mx-auto w-full">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
