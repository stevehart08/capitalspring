import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { SiSolana, SiEthereum, SiBitcoin } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const wallets = [
  {
    icon: <SiBitcoin className="text-[#a06eff] size-6" />,
    title: "Bitcoin Wallet",
    address:
      "bc1q5lca0whfwtzpef55vmrxcnn54lz9lyhfnhdqw6",
  },
  {
    icon: <SiEthereum className="text-[#a06eff] size-6" />,
    title: "Ethereum Wallet",
    address: "0xc3e155f4cDfc71C35553b58651F060DA7D63c183",
  },
  {
    icon: <SiSolana className="text-[#a06eff] size-6" />,
    title: "Solana Wallet",
    address: "EKbPGz2LNazb5cqHkeeZiXNfQ1R6mHeqRdcQ1VUV6Cw1",
  },
];

const DepositWallets = ({ openDeposit, setOpenDeposit }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (address, index) => {
    navigator.clipboard.writeText(address);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 overflow-y-auto py-5 bg-opacity-80 backdrop-blur-xs z-50">
      <AnimatePresence>
        {openDeposit && (
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[80%] mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Deposit Wallets
              </h2>

              {wallets.map((wallet, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    {wallet.icon}
                    <span className="font-medium">{wallet.title}</span>
                  </div>

                  <div className="bg-gray-100 text-sm flex items-center justify-between px-3 py-4 rounded-md">
                    <span className="truncate">{wallet.address}</span>
                    <button
                      onClick={() => handleCopy(wallet.address, index)}
                      className="text-[#a06eff] hover:text-gray-700"
                      title="Copy to clipboard"
                    >
                      <FaCopy />
                    </button>
                  </div>

                  <p className="text-[#a06eff] text-[14px] mt-1">
                    {copied === index &&
                      `${
                        wallet.title.split(" ")[0]
                      } address copied to clipboard!`}
                  </p>
                </div>
              ))}

              <button
                className="w-full mt-5 rounded-xl bg-[#a06eff] text-white px-8 py-3 text-lg font-medium hover:bg-[#5c3c97] transition-all shadow-lg hover:shadow-xl"
                onClick={() => {
                  setOpenDeposit(false);
                }}
              >
                <span>Close</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DepositWallets;
