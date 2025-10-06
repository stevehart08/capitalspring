import React from "react";
import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Testimonies = () => {
  return (
    <div className="mt-[120px] mx-auto w-full h-full scroll-smooth">
      <CustomerReviews />
      <StartJourney />

      <Footer />
    </div>
  );
};

const CustomerReviews = () => {
  const starCount = 5;

  const stars = Array(starCount).fill(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      location: "New York, USA",
      stars: 5,
      title: "Transformed My Investment Strategy",
      message:
        "Capitalspring has completely changed how I approach investing, and I couldn't be happier with the results.",
      timeAgo: "288 days ago",
    },
    {
      id: 2,
      name: "James Bennett",
      location: "London, UK",
      stars: 4.5,
      title: "Reliable and Intuitive",
      message:
        "Capitalspring is a reliable platform that has simplified crypto investing for me. Highly recommended!",
      timeAgo: "290 days ago",
    },
    {
      id: 3,
      name: "Emma Taylor",
      location: "San Francisco, USA",
      stars: 4.5,
      title: "Exceeded Expectations",
      message:
        "The tools and resources available on Capitalspring exceeded my expectations. The platform is a game-changer.",
      timeAgo: "296 days ago",
    },
    {
      id: 4,
      name: "Lucas Andersen",
      location: "Copenhagen, Denmark",
      stars: 4.5,
      title: "Transparent and Secure",
      message:
        "Capitalspring offers a secure and transparent investment experience. It’s my go-to platform for crypto.",
      timeAgo: "300 days ago",
    },
    {
      id: 5,
      name: "Olivia Harris",
      location: "Boston, USA",
      stars: 5,
      title: "Life-Changing Experience",
      message:
        "Using Capitalspring has been a life-changing experience. My investments have grown beyond my expectations.",
      timeAgo: "293 days ago",
    },
    {
      id: 6,
      name: "Sophia Miller",
      location: "Los Angeles, USA",
      stars: 5,
      title: "Amazing Support Team",
      message:
        "The support team at Capitalspring is amazing. They helped me set up my account and understand the platform.",
      timeAgo: "298 days ago",
    },
    {
      id: 7,
      name: "Ethan Collins",
      location: "Edinburgh, Scotland",
      stars: 4, // 4 full stars + 1 partial star (~60%)
      title: "Steady Returns",
      message:
        "I’ve enjoyed steady returns on my investments, and I trust Capitalspring for its security and reliability.",
      timeAgo: "303 days ago",
    },
    {
      id: 8,
      name: "Amelia Novak",
      location: "Warsaw, Poland",
      stars: 5,
      title: "Trustworthy Platform",
      message:
        "Capitalspring has proven to be a trustworthy platform for crypto investments. Highly recommended!",
      timeAgo: "305 days ago",
    },
    {
      id: 9,
      name: "Charlotte Meyer",
      location: "Amsterdam, Netherlands",
      stars: 4.7, // Approximation based on 4 full stars + 70% of 5th star
      title: "Exceptional Features",
      message:
        "Capitalspring's features are exceptional. I love the insights and analytics they provide for investments.",
      timeAgo: "308 days ago",
    },
    {
      id: 10,
      name: "Liam Brown",
      location: "Vienna, Austria",
      stars: 5,
      title: "Highly Recommended",
      message:
        "I highly recommend Capitalspring to anyone looking to invest in crypto safely and efficiently.",
      timeAgo: "318 days ago",
    },
    {
      id: 11,
      name: "Grace Thompson",
      location: "Zurich, Switzerland",
      stars: 5,
      title: "Fantastic Investment Platform",
      message:
        "Fantastic investment platform! Capitalspring has helped me grow my wealth and understand crypto better.",
      timeAgo: "320 days ago",
    },
  ];

  return (
    <div className="min-h-screen pt-5 md:pt-10 pb-12 md:pb-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Customer Reviews
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-base md:text-xl font-bold text-gray-700">
                EXCELLENT
              </span>
              <div className="flex gap-1">
                {stars.map((_, idx) => (
                  <div
                    key={idx}
                    className="relative p-2 rounded bg-gray-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-green-500"></div>
                    <FaStar className="relative text-white text-sm z-10" />
                  </div>
                ))}
              </div>
            </div>

            <p className="py-2 flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base">
              See all{" "}
              <span className="font-semibold text-black hover:underline cursor-pointer">
                300
              </span>{" "}
              reviews on <FaStar className="text-green-500 text-sm" />
              <span className="font-semibold text-black hover:underline cursor-pointer">
                Trustpilot
              </span>
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              delay={1 + idx * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function TestimonialCard({ testimonial, delay }) {
  const starsArray = Array(Math.floor(testimonial.stars)).fill(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm border border-gray-300"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div className="space-y-3">
          <h3 className="flex gap-3 justify-center items-center font-bold text-lg md:text-xl text-gray-900">
            <div className="flex gap-1">
              {starsArray.map((_, idx) => (
                <div
                  key={idx}
                  className="relative p-2 rounded bg-gray-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-500"></div>
                  <FaStar className="relative text-white text-sm z-10" />
                </div>
              ))}
            </div>{" "}
            by {testimonial.name}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <span className="text-lg md:text-xl font-bold text-gray-700">
          {testimonial.title}
        </span>
        <p className="text-sm md:text-base text-gray-700">
          {testimonial.message}
        </p>
      </div>

      <div className="text-xs md:text-sm text-gray-500">
        {testimonial.timeAgo}
      </div>
    </motion.div>
  );
}

const StartJourney = () => {
  return (
    <div className="bg-[#a06eff] text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Start Your Journey with Capitalspring
      </h2>
      <p className="text-xl mb-10 max-w-2xl mx-auto">
        Unlock the potential of smart crypto investments with a platform
        designed for growth and security. Take the first step today!
      </p>

      <motion.div initial="rest" whileHover="hover" animate="rest">
        <Link
          to="/signin"
          className="inline-flex items-center rounded-full bg-white text-black px-6 py-5 text-sm font-bold relative overflow-hidden"
        >
          <motion.span
            className="relative z-10"
            variants={{
              rest: { paddingRight: "1.5rem" },
              hover: { paddingRight: "2rem", transition: { duration: 0.3 } },
            }}
          >
            Get Started
          </motion.span>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0"
            variants={{
              rest: { opacity: 0, transition: { duration: 0.3 } },
              hover: { opacity: 1, transition: { duration: 0.3 } },
            }}
            style={{ pointerEvents: "none" }}
          ></motion.div>

          <motion.span
            className="relative z-10 opacity-0"
            variants={{
              rest: { opacity: 0, x: 0, transition: { duration: 0.3 } },
              hover: { opacity: 1, x: 8, transition: { duration: 0.3 } },
            }}
          >
            <FiArrowRight size={20} />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Testimonies;
