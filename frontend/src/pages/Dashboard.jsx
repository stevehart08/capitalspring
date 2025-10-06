import {
  FaWallet,
  FaCheckCircle,
  FaHistory,
  FaSign,
  FaExclamationTriangle,
} from "react-icons/fa";
import { SiSolana, SiEthereum, SiBitcoin } from "react-icons/si";
import DepositWallets from "../components/DepositWallets";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

function Dashboard() {
  const { user } = useAuthStore();
  const userName = user.name; // you may get from props or context

  const [openDeposit, setOpenDeposit] = useState(false);

  return (
    <main className="p-0 sm:p-4 md:p-8 mx-auto w-full">
      <div className="container mx-auto px-2 sm:px-6 max-w-7xl space-y-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-8 border-b border-gray-100">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Welcome, <span className="capitalize">{userName}</span>
              </h1>
              <div>
                {(user.isVerified && (
                  <span className="px-3 py-1.5 inline-flex gap-1 items-center text-sm leading-5 font-medium rounded-full bg-green-100 text-green-800">
                    <FaCheckCircle className="text-green-600 size-4" />
                    Account verified
                  </span>
                )) || (
                  <span className="px-3 py-1.5 inline-flex gap-1 items-center text-sm leading-5 font-medium rounded-full bg-yellow-100 text-yellow-800">
                    <FaExclamationTriangle className="text-yellow-600 size-4" />
                    Pending verification
                  </span>
                )}
              </div>
            </div>
            <div>
              <FaWallet className="text-[#a06eff] size-10" />
            </div>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">
                Total Balance Overview
              </h2>
              <p className="text-5xl font-bold text-[#a06eff] mb-6">
                ${formatNumber(user.totalBalance)}{" "}
                <span className="text-2xl text-gray-500">USD</span>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {/* Bitcoin Card */}
              <div className="bg-gray-50 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <SiBitcoin className="text-[#a06eff] size-7" />

                <div>
                  <p className="text-sm text-gray-500 capitalize mb-1">
                    bitcoin Balance
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {formatNumber(user.btcBalance.amount)} BTC
                  </p>
                  <p className="text-xs text-[#a888e4]">
                    ${formatNumber(user.btcBalance.value)}
                  </p>
                </div>
              </div>
              {/* Ethereum Card */}
              <div className="bg-gray-50 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <SiEthereum className="text-[#a06eff] size-7" />
                <div>
                  <p className="text-sm text-gray-500 capitalize mb-1">
                    ethereum Balance
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {formatNumber(user.ethBalance.amount)} ETH
                  </p>
                  <p className="text-xs text-[#a888e4]">
                    ${formatNumber(user.ethBalance.value)}
                  </p>
                </div>
              </div>
              {/* Solana Card */}
              <div className="bg-gray-50 p-6 rounded-xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
                <SiSolana className="text-[#a06eff] size-7" />
                <div>
                  <p className="text-sm text-gray-500 capitalize mb-1">
                    solana Balance
                  </p>
                  <p className="text-xl font-bold text-gray-800">
                    {formatNumber(user.solBalance.amount)} SOL
                  </p>
                  <p className="text-xs text-[#a888e4]">
                    ${formatNumber(user.solBalance.value)}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#a06eff] text-white px-8 py-3 text-lg font-medium hover:bg-[#5c3c97] transition-all shadow-lg hover:shadow-xl"
              onClick={() => setOpenDeposit(true)}
            >
              <span>Deposit Funds</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
              </svg>
            </button>
          </div>
          <div className="border-t border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Active Investment Plans
                </h2>
                <p className="text-gray-500">
                  Track your investment portfolio performance
                </p>
              </div>
              <div className="bg-[#a06eff]/10 px-6 py-3 rounded-xl">
                <span className="text-sm text-gray-600 mr-2">
                  Total Invested:{" "}
                </span>
                <span className="text-xl font-bold text-[#a06eff]">$0.00</span>
              </div>
            </div>
            <div className="w-full">
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mx-auto mb-4 text-5xl text-gray-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                </svg>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                  No Active Investments
                </h3>
                <p className="text-gray-500 max-w-md mx-auto text-lg">
                  Start investing now to build your portfolio and track your
                  investments in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-gray-50 p-2 rounded-lg">
                  <FaHistory className="text-gray-500 size-4" />
                </div>
                <h3 className="font-medium text-gray-700">Recent Activity</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="max-h-[320px] overflow-y-auto">
                <div className="text-center py-8">
                  <p className="text-gray-400">No recent activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openDeposit && (
        <DepositWallets
          setOpenDeposit={setOpenDeposit}
          openDeposit={openDeposit}
        />
      )}
    </main>
  );
}

function formatNumber(str) {
  return str;
  // const num = parseFloat(str);
  // return num.toLocaleString("en-US", {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });
}

export default Dashboard;
