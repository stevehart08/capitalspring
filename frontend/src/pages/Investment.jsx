import { SiSolana, SiEthereum, SiBitcoin } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";

import toast from "react-hot-toast";

const Investment = () => {
  const investmentPlans = [
    {
      icon: "🛡️",
      title: "Conservative Growth Plan",
      subtitle: "Beginners or cautious investors",
      composition: [
        { asset: "Stablecoins (USDT, USDC)", percent: "70%" },
        { asset: "Established cryptocurrencies (BTC, ETH)", percent: "20%" },
        { asset: "High-potential meme coins (DOGE, SHIB)", percent: "10%" },
      ],
      returns: "20-30% per month",
      lockIn: "60 days (2 months)",
      riskLevel: "Low Risk",
      riskColor: "#a06eff",
      riskIcon: "low",
      iconColor: "text-green-500",
    },
    {
      icon: "📊",
      title: "Diversified Portfolio Plan",
      subtitle: "Investors looking for a mix of stability and growth",
      composition: [
        { asset: "Established cryptocurrencies", percent: "40%" },
        { asset: "Altcoins", percent: "30%" },
        { asset: "Meme coins", percent: "20%" },
        { asset: "Stablecoins for flexibility", percent: "10%" },
      ],
      returns: "80-120% over 3 months",
      lockIn: "90 days (3 months)",
      riskLevel: "Low Risk",
      riskColor: "#a06eff",
      riskIcon: "low",
      iconColor: "text-indigo-500",
    },
    {
      icon: "🚀",
      title: "Accelerated Growth Plan",
      subtitle: "Aggressive investors seeking maximum growth",
      composition: [
        { asset: "High-potential altcoins", percent: "60%" },
        { asset: "Meme coins for explosive growth", percent: "30%" },
        { asset: "Established cryptocurrencies for stability", percent: "10%" },
      ],
      returns: "300-500% over 4 months",
      lockIn: "120 days (4 months)",
      riskLevel: "Medium Risk",
      riskColor: "#a06eff",
      riskIcon: "medium",
      iconColor: "text-red-500",
    },
    {
      icon: "💰",
      title: "Strategic Wealth Plan",
      subtitle: "Investors ready for high returns with moderate risk",
      composition: [
        { asset: "Pre-vetted ICOs and token launches", percent: "30%" },
        { asset: "Real Estate", percent: "20%" },
        { asset: "Bonds", percent: "15%" },
        { asset: "Established cryptocurrencies", percent: "15%" },
        { asset: "Stocks", percent: "10%" },
        { asset: "Emerging DeFi projects", percent: "5%" },
        { asset: "Agriculture", percent: "5%" },
      ],
      returns: "1200-1800% over 1 year",
      lockIn: "180 days (6 months)",
      riskLevel: "Low Risk",
      riskColor: "#a06eff",
      riskIcon: "low",
      iconColor: "text-yellow-500",
    },
    {
      icon: "💡",
      title: "Visionary Growth Plan",
      subtitle: "Bold, transformative investments",
      composition: [
        { asset: "ICOs & token launches", percent: "40%" },
        { asset: "Real Estate", percent: "25%" },
        { asset: "Stocks", percent: "15%" },
        { asset: "Bonds", percent: "10%" },
        { asset: "Metaverse tokens", percent: "5%" },
        { asset: "Agriculture", percent: "5%" },
      ],
      returns: "3,000–5,000% over 12 months",
      lockIn: "365 days",
      riskLevel: "Moderate Risk",
      riskColor: "#fdcb6e",
      riskIcon: "medium",
      iconColor: "text-yellow-400",
    },
    {
      icon: "🔺",
      title: "Apex Wealth Plan",
      subtitle: "All-in, high-stakes crypto & DeFi",
      composition: [
        { asset: "ICOs & token launches", percent: "50%" },
        { asset: "Real Estate", percent: "20%" },
        { asset: "Small-cap crypto", percent: "10%" },
        { asset: "Gaming/metaverse tokens", percent: "10%" },
        { asset: "DeFi", percent: "5%" },
        { asset: "Stocks", percent: "5%" },
      ],
      returns: "7,500–15,000% over 18 months",
      lockIn: "540 days",
      riskLevel: "High Risk",
      riskColor: "#d63031",
      riskIcon: "high",
      iconColor: "text-red-500",
    },
    {
      icon: "🌾",
      title: "AgriTech Growth Plan",
      subtitle: "Mid-term growth via agricultural innovation",
      composition: [
        { asset: "Smart Farming", percent: "30%" },
        { asset: "Vertical Farming", percent: "25%" },
        { asset: "Agri Commodities", percent: "20%" },
        { asset: "Agri Startups", percent: "15%" },
        { asset: "Water Solutions", percent: "10%" },
      ],
      returns: "500–800% over 6–12 months",
      lockIn: "180 days",
      riskLevel: "Moderate Risk",
      riskColor: "#00cec9",
      riskIcon: "medium",
      iconColor: "text-teal-400",
    },
    {
      icon: "🏢",
      title: "Real Estate Growth Plan",
      subtitle: "Real estate with a mix of tech and physical assets",
      composition: [
        { asset: "Commercial Real Estate", percent: "35%" },
        { asset: "Luxury Residential", percent: "25%" },
        { asset: "Real Estate Tech", percent: "20%" },
        { asset: "Industrial", percent: "15%" },
        { asset: "Virtual Real Estate (Metaverse)", percent: "5%" },
      ],
      returns: "1,000–2,000% over 6–12 months",
      lockIn: "180–365 days",
      riskLevel: "Low Risk",
      riskColor: "#6c5ce7",
      riskIcon: "low",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <main className="p-0 sm:p-4 md:p-8 mx-auto w-full">
      <div className="container mx-auto px-0 sm:px-4 py-8">
        <div className="bg-white overflow-hidden">
          <div className="py-4 px-3 sm:px-4 flex justify-between items-end">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Investment Plans
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Choose your investment strategy
              </p>
            </div>
          </div>

          {/* Crypto Balances */}
          <div className="py-4 px-3 sm:px-4">
            <div className="flex flex-wrap gap-4">
              <CryptoCard name="Bitcoin" symbol="BTC" />
              <CryptoCard name="Ethereum" symbol="ETH" />
              <CryptoCard name="Solana" symbol="SOL" />
            </div>
          </div>

          {/* Future Plan Cards */}
          <div className="py-6 px-3 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Placeholder for future investment plan cards */}
              {investmentPlans.map((e) => (
                <InvestmentCard
                key={e.title}
                  icon={e.icon}
                  title={e.title}
                  subtitle={e.subtitle}
                  composition={e.composition}
                  returns={e.returns}
                  lockIn={e.lockIn}
                />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="py-6 px-3 sm:px-6 border-t border-gray-300 bg-[#a06eff]/10">
            <div className="flex items-start space-x-3">
              <svg
                viewBox="0 0 16 16"
                className="h-6 w-6 text-[#a06eff] flex-shrink-0"
                fill="currentColor"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <div>
                <strong className="block mb-2 text-sm text-gray-700">
                  Disclaimer:
                </strong>
                <p className="text-xs text-gray-600">
                  Cryptocurrency investments involve significant risks. Returns
                  are estimated and not guaranteed. Always invest responsibly
                  and consult a financial advisor before making any investment
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const CryptoCard = ({ name, symbol }) => {
  const icons = {
    BTC: <SiBitcoin className="text-[#a06eff] size-6" />,
    ETH: <SiEthereum className="text-[#a06eff] size-6" />,
    SOL: <SiSolana className="text-[#a06eff] size-6" />,
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-[#a06eff]/5 rounded-lg">{icons[symbol]}</div>
        <div>
          <p className="text-sm text-gray-500">{name}</p>
          <p className="text-lg font-semibold text-gray-900">0.0000 {symbol}</p>
        </div>
      </div>
    </div>
  );
};

const InvestmentCard = ({
  icon,
  title,
  subtitle,
  composition,
  returns,
  lockIn,
}) => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
    <div className="h-full p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl text-[#a06eff]">{icon}</div>
          <span className="px-2 py-1 inline-flex gap-1.5 items-center text-xs font-semibold rounded-full bg-[#a06eff]/10 text-[#a06eff]">
            <FaCheckCircle /> Low Risk
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Portfolio Composition
          </h3>
          <div className="p-2 h-[15vh] overflow-y-auto">
            {composition.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-xs text-gray-700 py-1"
              >
                <span>{item.asset}</span>
                <span className="font-semibold">{item.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <span className="text-xs text-gray-500 block mb-1">
              Expected Returns
            </span>
            <p className="text-sm font-semibold text-green-600">{returns}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 block mb-1">
              Lock-In Period
            </span>
            <p className="text-sm font-semibold text-gray-800">{lockIn}</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deposit Amount
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
              placeholder="Enter amount"
              min="0"
              step="0.001"
            />
            <select className="rounded-md border-gray-300 shadow-sm w-24">
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="sol">SOL</option>
            </select>
          </div>
        </div>
        <button
          className="w-full py-2 rounded-md text-sm font-medium bg-[#a06eff] text-white hover:bg-[#5c3c97]"
          onClick={() => {
            // alert('errr')
            toast.error("Insufficient balance", { id: "error_1" });
          }}
        >
          Invest Now
        </button>
      </div>
    </div>
  </div>
);

export default Investment;
