import React, { useState } from "react";
import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaShieldAlt, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import {
  FaBitcoin,
  FaBuilding,
  FaSeedling,
  FaChartLine,
  FaUniversity,
  FaSatelliteDish,
  FaNetworkWired,
  FaGlobe,
} from "react-icons/fa";
import { FaInfoCircle, FaFileDownload } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div className="mt-[120px] mx-auto w-full h-full scroll-smooth bg-gradient-to-b from-white to-[#f8f8f8]">
      <AboutCapitalspring />
      <WhoWeAreSection />
      <InvestmentUniverse />
      <InvestmentDocumentation />

      <Footer />
    </div>
  );
};

const AboutCapitalspring = () => {
  return (
    <div className="bg-gradient-to-br from-[#a06eff] to-[#8257d3] text-white py-52 text-center relative overflow-hidden">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Capitalspring
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto text-white/90 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Transforming the investment landscape through technology, insight, and
          personalized financial solutions.
        </motion.p>

        {/* Optional Icon - scroll indicator */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <FaArrowDown className="text-white/80 text-2xl animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

const WhoWeAreSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Description */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#a06eff] to-[#8257d3] bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Capitalspring is a next-generation investment platform combining
            traditional financial expertise with cutting-edge technology. Since
            our founding in 2020, we've been dedicated to democratizing access
            to sophisticated investment strategies while maintaining the highest
            standards of security and compliance.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: <FaShieldAlt className="w-8 h-8 text-[#a06eff]" />,
              title: "Security First",
              description:
                "Enterprise-grade security protocols protecting your investments with multi-layer encryption and regular security audits.",
            },
            {
              icon: <FaUsers className="w-8 h-8 text-[#a06eff]" />,
              title: "Expert Team",
              description:
                "Seasoned investment professionals with decades of combined experience in traditional and digital assets.",
            },
            {
              icon: <FaLightbulb className="w-8 h-8 text-[#a06eff]" />,
              title: "Innovation Driven",
              description:
                "Cutting-edge technology and AI-powered analytics for optimal investment strategies and risk management.",
            },
            {
              icon: <FaAward className="w-8 h-8 text-[#a06eff]" />,
              title: "Proven Track Record",
              description:
                "Consistent above-market returns and recognition from leading financial institutions.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-[#a06eff]/5 hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="bg-[#a06eff]/10 p-3 md:p-4 rounded-2xl inline-block mb-4 md:mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-[#a06eff]/10 to-[#8257d3]/10 p-6 md:p-12 rounded-3xl border border-[#a06eff]/20 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#a06eff] to-[#8257d3] bg-clip-text text-transparent">
            Our Mission
          </h3>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            To revolutionize the investment landscape by providing accessible,
            secure, and innovative financial solutions that empower investors of
            all levels to achieve their financial goals. We believe in combining
            human expertise with advanced technology to deliver superior returns
            while maintaining the highest standards of transparency and
            security.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const InvestmentUniverse = () => {
  const investmentCategories = [
    {
      id: "crypto",
      label: "Cryptocurrency",
      icon: FaBitcoin,
      title: "Cryptocurrency Investments",
      description:
        "Explore popular cryptocurrencies and blockchain-based assets.",
      bullets: [
        "Top-performing crypto coins and tokens",
        "Decentralized finance platforms",
        "Stablecoins with utility and backing",
      ],
      keyAdvantage:
        "Access high-risk, high-reward assets with potential exponential growth.",
    },
    {
      id: "real-estate",
      label: "Real",
      icon: FaBuilding,
      title: "Real Estate Investments",
      description: "Diversify with tangible property and REITs.",
      bullets: [
        "Rental properties in key cities",
        "REITs with strong dividend history",
        "Crowdfunded real estate platforms",
      ],
      keyAdvantage: "Real estate provides stable, long-term passive income.",
    },
    {
      id: "agriculture",
      label: "Agricultural",
      icon: FaSeedling,
      title: "Agricultural Investments",
      description: "Invest in food security and sustainable farming.",
      bullets: [
        "Farm land ownership",
        "Agri-tech companies",
        "Commodities like wheat and soy",
      ],
      keyAdvantage:
        "Secure long-term growth through essential resource production.",
    },
    {
      id: "stocks",
      label: "Stocks",
      icon: FaChartLine,
      title: "Stock Market",
      description: "Invest in traditional and tech stocks across sectors.",
      bullets: [
        "Blue chip and dividend stocks",
        "Tech growth companies",
        "Index and mutual funds",
      ],
      keyAdvantage: "A core building block of any diversified portfolio.",
    },
    {
      id: "bonds",
      label: "Bonds",
      icon: FaUniversity,
      title: "Bond Investments",
      description: "Stable returns through government and corporate bonds.",
      bullets: [
        "High-yield corporate bonds",
        "Treasury and municipal bonds",
        "Bond ETFs for stability",
      ],
      keyAdvantage: "Reliable fixed income with lower risk exposure.",
    },
    {
      id: "emerging",
      label: "Emerging",
      icon: FaSatelliteDish,
      title: "Emerging Markets",
      description: "Tap into growing economies and global diversification.",
      bullets: [
        "Asian and African tech startups",
        "Frontier ETFs and funds",
        "Sovereign infrastructure bonds",
      ],
      keyAdvantage:
        "Early access to future global leaders in finance and tech.",
    },
    {
      id: "defi",
      label: "DeFi",
      icon: FaNetworkWired,
      title: "Decentralized Finance",
      description: "Banking, lending, and investing without intermediaries.",
      bullets: [
        "Lending protocols like Aave or Compound",
        "DEX tokens and liquidity pools",
        "Yield farming and staking opportunities",
      ],
      keyAdvantage:
        "Full control of your finances via blockchain infrastructure.",
    },
    {
      id: "metaverse",
      label: "Metaverse",
      icon: FaGlobe,
      title: "Metaverse Investments",
      description:
        "Dive into the rapidly growing world of virtual real estate and metaverse tokens:",
      bullets: [
        "Speculative metaverse-based cryptocurrencies",
        "Virtual real estate opportunities in leading metaverse platforms",
        "Gaming tokens with strong user engagement and potential growth",
      ],
      keyAdvantage:
        "Position yourself at the forefront of the digital evolution with strategic metaverse investments.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    investmentCategories[investmentCategories.length - 1]
  ); // default to 'Metaverse'

  return (
    <section className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#a06eff] to-[#8257d3] bg-clip-text text-transparent">
            Our Investment Universe
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of investment opportunities, each
            carefully curated for optimal growth and security.
          </p>
        </motion.div>

        {/* Categories Scrollable Buttons */}
        <motion.div
          className="flex overflow-x-auto py-5 pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-3 md:gap-6 mb-8 md:mb-16 -mx-4 px-4 md:mx-0 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {investmentCategories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory.id === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 md:px-8 py-3 md:py-4 rounded-xl cursor-pointer transition-all duration-300
                  flex items-center gap-2 md:gap-3 text-sm md:text-base shrink-0
                  border-2 [&>svg]:text-[#a06eff]
                  ${
                    isActive
                      ? "bg-[#a06eff] text-white shadow-lg shadow-[#a06eff]/20 scale-105 [&>svg]:text-white"
                      : "text-[#a06eff] hover:bg-[#a06eff]/10 border-[#a06eff]/20 hover:border-[#a06eff]"
                  }
                `}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8" />
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Detail Card */}
        <motion.div
          className="bg-white rounded-3xl p-6 md:p-12 max-w-4xl mx-auto shadow-xl shadow-[#a06eff]/5"
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="bg-[#a06eff]/10 p-4 md:p-6 rounded-2xl mb-4 md:mb-6">
              <selectedCategory.icon className="w-12 h-12 text-[#a06eff]" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#a06eff] to-[#8257d3] bg-clip-text text-transparent">
              {selectedCategory.title}
            </h3>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              {selectedCategory.description}
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {selectedCategory.bullets.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-[#f8f8f8] p-4 md:p-6 rounded-xl hover:bg-[#a06eff]/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-2 md:w-3 h-2 md:h-3 bg-[#a06eff] rounded-full mr-4 md:mr-6"></div>
                <p className="text-sm md:text-lg text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-4 md:p-8 bg-gradient-to-r from-[#a06eff]/10 to-[#8257d3]/10 rounded-2xl border border-[#a06eff]/20">
            <p className="text-[#a06eff] text-base md:text-xl font-medium leading-relaxed">
              {selectedCategory.keyAdvantage}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InvestmentDocumentation = () => {
  function openPdfInNewTab() {
    const url =
      "https://capitalspring-test.vercel.app/docs/view-investment-guide";
    window.open(url, "_blank");
  }

  function downloadPdf() {
    const url =
      "https://capitalspring-test.vercel.app/docs/view-investment-guide";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Capitalspring-docs.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-r from-[#a06eff]/10 to-[#8257d3]/10 p-6 md:p-12 rounded-3xl border border-[#a06eff]/20">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-[#a06eff] to-[#8257d3] p-4 rounded-2xl mb-6 md:mb-8">
              <FaInfoCircle className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#a06eff] to-[#8257d3] bg-clip-text text-transparent">
              Detailed Investment Documentation
            </h3>

            <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl">
              Download our comprehensive investment guide to learn more about
              our strategies, risk management approach, and detailed returns
              analysis.
            </p>

            <div className="flex flex-col md:flex-row w-full md:w-auto items-stretch md:items-center justify-center gap-4 md:gap-6">
              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  downloadPdf();
                }}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#a06eff] to-[#8257d3] text-white px-6 md:px-8 py-4 rounded-xl shadow-lg shadow-[#a06eff]/20 w-full md:w-auto transition-transform"
              >
                <FaFileDownload className="text-xl" />
                <span>Download PDF</span>
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>

              {/* View Online Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  openPdfInNewTab();
                }}
                className="group flex items-center justify-center gap-3 border-2 border-[#a06eff] text-[#a06eff] px-6 md:px-8 py-4 rounded-xl hover:bg-[#a06eff] hover:text-white transition-colors duration-300 w-full md:w-auto"
              >
                <span>View Online</span>
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
