import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="mt-[120px] mx-auto w-full h-full scroll-smooth bg-gradient-to-b from-white to-gray-50">
      <GetInTouch />
      <ContactSection />

      <Footer />
    </div>
  );
};

const GetInTouch = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto text-center pt-20">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#a06eff] flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <HiOutlineMail size={40} />
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Have questions about your investments? Our team is here to help you
          succeed.
        </motion.p>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        {/* Contact Info */}
        <motion.div
          className="md:col-span-2 space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center md:text-left space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Contact Information
              </h2>

              {/* Email Support */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-purple-50 rounded-xl">
                <MdEmail className="text-[#a06eff] w-6 h-6" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <a
                    href="mailto:support@capitalspring.co"
                    className="text-base lg:text-lg text-[#a06eff] hover:text-[#7d56c5] transition-colors break-all"
                  >
                    support@capitalspring.co
                  </a>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                Our support team typically responds within 24 hours during
                business days.
              </p>
            </div>

            {/* Telegram Help Desk */}
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-blue-50 rounded-xl">
                <FaTelegramPlane className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="font-medium">Help Desk</p>
                  <a
                    href="https://t.me/capitalspringofficialhelpdesk1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base lg:text-lg text-blue-600 hover:text-blue-700 transition-colors break-all"
                  >
                    Telegram Support
                  </a>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                Get instant support and connect with our team in real-time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              Send us a Message
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow resize-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#a06eff] hover:bg-[#7d56c5] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-4 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                </svg>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
}

export default ContactPage;
