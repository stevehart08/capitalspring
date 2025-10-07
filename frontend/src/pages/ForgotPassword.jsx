import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mt-[130px] flex items-center w-full justify-center bg-gradient-to-b from-white to-[#f8f8f8] px-4 py-6">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side: Form */}
          <div className="w-full p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-4">
              Forgot Password
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="mb-2 text-sm font-medium text-gray-600 flex items-center gap-2">
                  <MdEmail /> Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a5acd]/50 transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#6a5acd] text-white py-3 rounded-lg hover:bg-[#5a4abd] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Reset Code
              </button>

              {/* Link to Sign In */}
              <div className="text-center mt-5">
                <Link
                  to="/signin"
                  className="text-[#6a5acd] hover:underline font-semibold"
                >
                  Back to Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
