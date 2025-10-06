import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <div className="mt-[120px] mx-auto w-full h-full scroll-smooth">
      <FAQHeader />
      <FAQList />
      <SupportSection />

      <Footer />
    </div>
  );
};

const FAQHeader = () => {
  return (
    <div className="bg-[#a06eff] text-white py-44 px-3 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-4">
          <FaQuestionCircle size={40} className="text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Frequently Asked Questions
        </h1>

        <motion.p
          className="text-xl max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get answers to the most common questions about Capitalspring and our
          innovative investment platform.
        </motion.p>
      </motion.div>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 overflow-hidden hover:bg-[#ececef] transition-all duration-300 pl-3 hover:rounded-lg hover:pl-5">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-6 px-5"
      >
        <h3 className="text-xl font-semibold text-[#a06eff]">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-[#a06eff]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden bg-[#ececef] px-5"
          >
            <p className="pb-6 pt-4 text-gray-800">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQList = () => {
  const faqData = [
    {
      question: "How does Capitalspring's crypto investment strategy work?",
      answer:
        "Capitalspring uses cutting-edge blockchain technology, advanced algorithmic trading, and AI-driven insights to maximize your crypto investment potential. Our tailored strategies help you capitalize on market trends while managing risks, ensuring that your portfolio is optimized for growth.",
    },
    {
      question: "Is my cryptocurrency secure with Capitalspring?",
      answer:
        "Absolutely. We prioritize security by utilizing multi-signature wallets, cold storage solutions, and end-to-end encryption. Our platform also features advanced monitoring tools to protect your assets, giving you peace of mind as you focus on building your wealth.",
    },
    {
      question: "What sets Capitalspring apart from other crypto platforms?",
      answer:
        "At Capitalspring, we go beyond traditional crypto platforms by offering personalized investment strategies tailored to your goals. Our AI and data-driven approach identifies high-potential opportunities and optimizes your portfolio for long-term success, ensuring you get the most out of your investment.",
    },
    {
      question: "How much do I need to start investing in cryptocurrency?",
      answer:
        "Getting started is easy, with plans starting at just $100. However, to unlock the full potential of our tailored strategies and premium features, many investors choose to start with higher amounts. This allows for greater diversification and enhanced portfolio performance over time.",
    },
    {
      question: "Can I withdraw my cryptocurrency at any time?",
      answer:
        "Withdrawals are available once your chosen investment plan reaches its due time, ensuring you benefit from the full potential of your strategy. Our structured plans are designed to maximize returns, making it worthwhile to stay committed for the recommended duration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-2">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const SupportSection = () => {
  return (
    <div className="bg-[#a06eff] text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
      <p className="text-xl mb-10 max-w-2xl mx-auto">
        Our support team is ready to help you navigate your investment journey.
      </p>

      <motion.div initial="rest" whileHover="hover" animate="rest">
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full bg-white text-black px-6 py-5 text-sm font-bold relative overflow-hidden group"
        >
          <motion.span
            className="z-10 relative"
            variants={{
              rest: { paddingRight: 24 },
              hover: {
                paddingRight: 40,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            Contact Support
          </motion.span>

          <motion.div
            className="z-10 relative opacity-0"
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: {
                opacity: 1,
                x: 8,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            <FiPhone size={19} />
          </motion.div>

          <motion.div
            className="absolute rounded-full inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 pointer-events-none"
            variants={{
              rest: { opacity: 0 },
              hover: {
                opacity: 1,
                transition: { duration: 0.7, ease: "easeInOut" },
              },
            }}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default FaqPage;
