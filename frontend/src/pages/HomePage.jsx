import Footer from "../components/Footer";
import bgImage1 from "../assets/1-C22HOjGJ.jpg";
import bgImage2 from "../assets/2-B6MqT5B4.jpg";
import bgImage3 from "../assets/3-DNEG1jdo.jpg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters, AiFillCheckCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShieldAlt, FaRegClipboard } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GiShield, GiGrowth, GiRocketFlight } from "react-icons/gi";
import { FaStar, FaGlobeAmericas } from "react-icons/fa";
import { FaCog, FaBuilding } from "react-icons/fa";
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaChartLine,
  FaCoins,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const HomePage = () => {
  return (
    <div className="mt-[120px] mx-auto w-full h-full scroll-smooth">
      <HeroSection />
      <Features />
      <ReadyToInvest />
      <InvestmentPlans />
      <InvestmentPlanner />

      <Footer />
    </div>
  );
};

const HeroSection = () => {
  const images = [bgImage1, bgImage2, bgImage3];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <motion.div
      className="relative h-screen overflow-hidden flex flex-col items-center pt-20 md:pt-0 justify-center z-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />

          <div className="absolute inset-0 bg-black/50 bg-opacity-50" />
        </div>
      </div>

      <div className="z-10 text-left max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            to="/faq"
            className="border bg-[#a06eff] text-white border-[#a06eff] rounded-full px-3 w-fit flex gap-5 justify-center items-center group mb-3"
          >
            Read all about us
            <AiOutlineLoading3Quarters
              className="group-hover:hidden transition-opacity duration-300"
              size="1em"
            />
            <AiFillCheckCircle
              className="hidden group-hover:flex transition-opacity duration-300"
              size="1em"
            />
          </Link>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl mb-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Invest Smarter, Grow Faster
        </motion.h1>

        <motion.h1
          className="text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="italic text-[#a06eff] font-semibold">
            Capitalspring
          </span>{" "}
          leverages cutting-edge technology and expert insights to transform
          your financial future.
        </motion.h1>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ paddingRight: "2rem" }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[#a06eff] text-white px-6 py-4 text-sm font-medium transform transition-all duration-500 ease-in-out group hover:pr-8 relative overflow-hidden"
          >
            <span className="z-10 relative">Start Investing Now</span>
            <motion.div
              className="z-10 relative"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FaCheckCircle className="w-12 h-12 text-[#a06eff]" />,
      title: "Maximize Your Gains",
      description:
        "Leverage cutting-edge algorithms to supercharge your investments with precision and clarity.",
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-[#a06eff]" />,
      title: "Unbreakable Security",
      description:
        "Your wealth, safeguarded with top-notch encryption and diversified strategies for unmatched peace of mind.",
    },
    {
      icon: <FaRegClipboard className="w-12 h-12 text-[#a06eff]" />,
      title: "Your Plan, Your Way",
      description:
        "Experience bespoke investment strategies tailored to align with your unique aspirations and risk profile.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Why Choose Capitalspring
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-[#f8f8f8] border border-gray-300 p-8 rounded-lg text-left"
              variants={itemVariants}
            >
              <div className="flex justify-start mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-900">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ReadyToInvest = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="text-black overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          Ready to Unlock Your Financial Potential?
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Join thousands of investors who trust Capitalspring to help them
          achieve their financial goals.
        </motion.p>
        <motion.div
          variants={itemVariants}
          whileHover={{ paddingRight: "2rem" }}
        >
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[#a06eff] text-white font-semibold px-6 py-5 text-sm transform transition-all duration-500 ease-in-out group hover:pr-8 relative overflow-hidden"
          >
            <span className="z-10 relative">Start Investing Now</span>
            <FiArrowRight
              className="z-10 relative group-hover:translate-x-2 transition-transform duration-500"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const InvestmentPlans = () => {
  const plans = [
    {
      title: "Conservative Growth Plan",
      icon: <GiShield className="w-12 h-12 text-green-500" />,
      description: "Beginners or cautious investors",
      composition: [
        { name: "Stablecoins (USDT, USDC)", percent: "70%" },
        { name: "Established cryptocurrencies (BTC, ETH)", percent: "20%" },
        { name: "High-potential meme coins (DOGE, SHIB)", percent: "10%" },
      ],
      returns: "20-30% per month",
      lockIn: "60 days (2 months)",
      risk: { level: "Low", color: "text-green-600" },
    },
    {
      title: "Diversified Portfolio Plan",
      icon: <GiGrowth className="w-12 h-12 text-indigo-500" />,
      description: "Investors looking for a mix of stability and growth",
      composition: [
        { name: "Established cryptocurrencies", percent: "40%" },
        { name: "Altcoins", percent: "30%" },
        { name: "Meme coins", percent: "20%" },
        { name: "Stablecoins for flexibility", percent: "10%" },
      ],
      returns: "80-120% over 3 months",
      lockIn: "90 days (3 months)",
      risk: { level: "Low", color: "text-green-600" },
    },
    {
      title: "Accelerated Growth Plan",
      icon: <GiRocketFlight className="w-12 h-12 text-red-500" />,
      description: "Aggressive investors seeking maximum growth",
      composition: [
        { name: "High-potential altcoins", percent: "60%" },
        { name: "Meme coins for explosive growth", percent: "30%" },
        { name: "Established cryptocurrencies for stability", percent: "10%" },
      ],
      returns: "300-500% over 4 months",
      lockIn: "120 days (4 months)",
      risk: { level: "Medium", color: "text-yellow-600" },
    },
    {
      title: "Strategic Wealth Plan",
      icon: <FaStar className="w-12 h-12 text-yellow-500" />,
      description: "Investors ready for high returns with moderate risk",
      composition: [
        { name: "Pre-vetted ICOs and token launches", percent: "30%" },
        { name: "Real Estate", percent: "20%" },
        { name: "Bonds", percent: "15%" },
        { name: "Established cryptocurrencies", percent: "15%" },
        { name: "Stocks", percent: "10%" },
        { name: "Emerging DeFi projects", percent: "5%" },
        { name: "Agriculture", percent: "5%" },
      ],
      returns: "1200-1800% over 1 year",
      lockIn: "180 days (6 months)",
      risk: { level: "Low", color: "text-green-600" },
    },
    {
      title: "Visionary Growth Plan",
      icon: <FaGlobeAmericas className="w-12 h-12 text-orange-500" />,
      description:
        "Investors aiming for transformative wealth through bold risks",
      composition: [
        { name: "Pre-vetted ICOs and token launches", percent: "40%" },
        { name: "Real Estate", percent: "25%" },
        { name: "Stocks", percent: "15%" },
        { name: "Bonds", percent: "10%" },
        { name: "Speculative metaverse-based tokens", percent: "5%" },
        { name: "Agriculture", percent: "5%" },
      ],
      returns: "3000-5000% over 1 year",
      lockIn: "365 days (12 months)",
      risk: { level: "Medium", color: "text-yellow-600" },
    },
    {
      title: "Apex Wealth Plan",
      icon: <GiShield className="w-12 h-12 text-red-600" />,
      description:
        "Investors ready for all-out, high-stakes returns with no compromise",
      composition: [
        { name: "Pre-vetted ICOs and token launches", percent: "50%" },
        { name: "Real Estate", percent: "20%" },
        { name: "Speculative small-cap cryptocurrencies", percent: "10%" },
        { name: "Gaming and metaverse tokens", percent: "10%" },
        { name: "High-yield DeFi platforms", percent: "5%" },
        { name: "Stocks", percent: "5%" },
      ],
      returns: "7,500-15,000% over 18 months",
      lockIn: "540 days (18 months)",
      risk: { level: "Medium", color: "text-yellow-600" },
    },
    {
      title: "AgriTech Growth Plan",
      icon: <FaCog className="w-12 h-12 text-green-600" />,
      description:
        "Investors seeking mid-term growth through agricultural technology",
      composition: [
        { name: "Smart Farming Technologies", percent: "30%" },
        { name: "Vertical Farming Projects", percent: "25%" },
        { name: "Agricultural Commodities", percent: "20%" },
        { name: "Agri-focused Startups", percent: "15%" },
        { name: "Sustainable Water Solutions", percent: "10%" },
      ],
      returns: "500-800% over 6 months to 1 year",
      lockIn: "180 days (6 months)",
      risk: { level: "Medium", color: "text-yellow-600" },
    },
    {
      title: "Real Estate Growth Plan",
      icon: <FaBuilding className="w-12 h-12 text-blue-600" />,
      description:
        "Investors looking to build significant real estate assets in the medium term",
      composition: [
        { name: "Premium Commercial Properties", percent: "35%" },
        { name: "Luxury Residential Developments", percent: "25%" },
        { name: "Real Estate Technology Startups", percent: "20%" },
        { name: "Industrial Properties", percent: "15%" },
        { name: "Virtual Real Estate (Metaverse)", percent: "5%" },
      ],
      returns: "1,000-2,000% over 6 months to 1 year",
      lockIn: "180 days (6 months)",
      risk: { level: "Low", color: "text-green-600" },
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 50 },
    }),
  };

  const textSlideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-24">
      <motion.h1
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        Investment Plans
      </motion.h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-14">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className="border border-gray-300 bg-[#f8f8f8] rounded-xl p-6"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: i * 0.3 + 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {plan.icon}
              </motion.div>
              <h2 className="ml-4 text-xl font-semibold text-gray-800">
                {plan.title}
              </h2>
            </div>
            <motion.p
              className="text-gray-600 mb-4 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.3 + 0.4 }}
            >
              {plan.description}
            </motion.p>
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">
                Portfolio Composition:
              </h3>
              {plan.composition.map(({ name, percent }, idx) => (
                <motion.div
                  key={idx}
                  className="flex justify-between text-sm text-gray-600"
                  initial="hidden"
                  animate="visible"
                  variants={textSlideVariants}
                  transition={{ delay: i * 0.3 + 0.5 + idx * 0.1 }}
                >
                  <span>{name}</span>
                  <span>{percent}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.9 }}
              >
                <span className="font-medium text-gray-700">
                  Expected Returns:
                </span>{" "}
                <span className="text-green-600">{plan.returns}</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 1 }}
              >
                <span className="font-medium text-gray-700">
                  Lock-In Period:
                </span>{" "}
                {plan.lockIn}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 1.1 }}
              >
                <span className="font-medium text-gray-700">Risk Level:</span>{" "}
                <span className={`font-bold ${plan.risk.color}`}>
                  {plan.risk.level}
                </span>
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 text-xs lg:text-sm text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <strong>Disclaimer:</strong> Cryptocurrency investments involve
        significant risks. Returns are estimated and not guaranteed. Always
        invest responsibly and consult a financial advisor.
      </motion.div>
    </div>
  );
};

const InvestmentPlanner = () => {
  const [plan, setPlan] = useState("conservativeGrowth");
  const [deposit, setDeposit] = useState(300);

  // Placeholder logic for return calculation (replace with actual formulas)
  const profit = deposit * 0.25; // example 25% profit
  const totalReturn = deposit + profit;

  const chartData = [
    { name: "Deposit", value: deposit },
    { name: "After Investment", value: totalReturn },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 md:p-6 lg:p-10 mt-14 mb-24 max-w-[90%] md:max-w-xl lg:max-w-6xl mx-auto border border-gray-300 rounded-xl bg-gray-50"
    >
      <h1 className="text-2xl lg:text-4xl text-center text-gray-800 font-bold mb-8">
        Investment Planner
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <motion.div whileHover={{ scale: 1.03 }} className="w-full lg:w-1/2">
          <label className="mb-2 flex items-center gap-2 font-semibold">
            <FaChartLine className="text-purple-500" /> Select Investment Plan:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="conservativeGrowth" className="bg-gray-50">
              Conservative Growth Plan
            </option>
            <option value="diversifiedPortfolio" className="bg-gray-50">
              Diversified Portfolio Plan
            </option>
            <option value="acceleratedGrowth" className="bg-gray-50">
              Accelerated Growth Plan
            </option>
            <option value="strategicWealth" className="bg-gray-50">
              Strategic Wealth Plan
            </option>
            <option value="visionaryGrowth" className="bg-gray-50">
              Visionary Growth Plan
            </option>
            <option value="apexWealth" className="bg-gray-50">
              Apex Wealth Plan
            </option>
            <option value="agriTechDomination" className="bg-gray-50">
              AgriTech Growth Plan
            </option>
            <option value="realEstateEmpire" className="bg-gray-50">
              Real Estate Growth Plan
            </option>
          </select>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="w-full lg:w-1/2">
          <label className="mb-2 flex items-center gap-2 font-semibold">
            <FaMoneyBillWave className="text-purple-500" /> Deposit Amount:
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300  rounded"
            min="1"
            value={deposit}
            onChange={(e) => setDeposit(parseFloat(e.target.value) || 1)}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex flex-col items-center justify-center"
      >
        <h2 className="text-gray-600 text-base lg:text-xl">Expected Returns</h2>
        <span className="text-5xl text-purple-500">
          ${totalReturn.toFixed(2)}
        </span>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-5 flex justify-center items-center"
      >
        <div className="flex flex-wrap px-3 py-1 rounded-full bg-white gap-4 text-gray-400 font-semibold items-center justify-center">
          <div className="text-xs flex items-center gap-2">
            <FaCoins className="text-purple-500" />
            Initial Deposit:{" "}
            <span className="text-sm text-purple-500">
              ${deposit.toFixed(2)}
            </span>
          </div>
          <div className="text-xs flex items-center gap-2">
            <FaChartLine className="text-purple-500" />
            Total Profit:{" "}
            <span className="text-sm text-purple-500">
              ${profit.toFixed(2)}
            </span>
          </div>
          <div className="text-xs flex items-center gap-2">
            <FaMoneyBillWave className="text-purple-500" />
            Monthly Profit:{" "}
            <span className="text-sm text-purple-500">
              ${(profit / 2).toFixed(2)}
            </span>
          </div>
          <div className="text-xs flex items-center gap-2">
            <FaCalendarAlt className="text-purple-500" />
            Duration:{" "}
            <span className="text-sm text-purple-500">60 days (2 months)</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-10">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              domain={[0, Math.max(deposit, totalReturn) + 50]}
            />
            <CartesianGrid strokeDasharray="6 8" />
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorValue)"
              name="Total Investment Returns"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default HomePage;
