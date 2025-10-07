// WithdrawPage.jsx
import { FaWallet } from "react-icons/fa";

const WithdrawPage = () => {
  return (
    <main className="p-0 sm:p-4 md:p-8 mx-auto w-full">
      <div className="container mx-auto px-2 sm:px-4 py-5 max-w-7xl space-y-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-row justify-between items-center py-6 px-3 sm:px-6 border-b border-gray-300">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">
                Withdraw Funds
              </h1>
            </div>
            <div className="p-3 bg-[#a06eff]/10 rounded-full">
              <FaWallet className="text-[#a06eff] size-7 sm:size-10" />
            </div>
          </div>

          <div className="py-6 px-3 sm:px-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Select Coin
            </h2>
            {/* Coin selection placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"></div>

            <form className="space-y-6 mt-6">
              <button
                type="submit"
                disabled
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#a06eff] text-white px-3 sm:px-6 py-3 font-medium hover:bg-[#5c3c97] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed hover:shadow-lg"
              >
                <span>Request Withdrawal</span>
                <svg
                  viewBox="0 0 32 32"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <WithdrawalHistory />
      </div>
    </main>
  );
};

const WithdrawalHistory = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden mt-5"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="py-6 px-3 sm:px-6 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Withdrawal History</h2>
        <div className="flex items-center gap-2 text-[12px] sm:text-sm text-gray-500">
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
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
          </svg>
          <span>Recent transactions</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Coin
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Note
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Add <tr> rows here dynamically as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawPage;
