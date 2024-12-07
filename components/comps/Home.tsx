'use client';
import React, { useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

export default function Home() {
  const [transactions, setTransactions] = useState([
    { id: "5001", asset: "BTC", action: "Buy", date: "2024-12-05", amount: "$12,000", status: "Completed" },
    { id: "5002", asset: "ETH", action: "Stake", date: "2024-12-06", amount: "5 ETH", status: "In Progress" },
  ]);
  const [wallets, setWallets] = useState(["Binance Wallet", "Photon Wallet", "Bitmex Wallet"]);
  const [newWallet, setNewWallet] = useState("");

  const handleAddWallet = () => {
    if (newWallet.trim() !== "") {
      setWallets([...wallets, newWallet.trim()]);
      setNewWallet("");
    }
  };

  const loadMoreTransactions = () => {
    setTransactions([
      ...transactions,
      { id: "5003", asset: "USDT", action: "Transfer", date: "2024-12-07", amount: "$1,000", status: "Completed" },
      { id: "5004", asset: "SOL", action: "Swap", date: "2024-12-08", amount: "10 SOL", status: "Completed" },
    ]);
  };

  return (
    <div className="flex h-screen bg-[#171031] text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171031] flex flex-col">
        <div className="p-4 text-lg font-bold text-[#01F3F4]">Coin Portfolio</div>

        <nav className="mt-4 space-y-2 px-4">
          <a
            href="/"
            className="block py-2 px-4 bg-[#FE664F] text-white rounded hover:bg-[#d9434f]"
          >
            Home
          </a>
          <a href="/home" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Total Portfolio Value
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Asset Allocation Chart
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Recent Transactions
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Quick Actions
          </a>
          <a href="/credit-score" className="block py-2 px-4 rounded hover:bg-[#FE664F]">
            Credit Score
          </a>
        </nav>

        {/* Exchanges Section */}
        <div className="mt-8 px-4">
          <h2 className="text-sm font-medium mb-2 text-[#01F3F4]">Your Exchanges</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
              <span>Binance</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-500"></span>
              <span>Photon</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
              <span>Bitmex</span>
            </li>
          </ul>
        </div>

        {/* Wallets Section */}
        <div className="mt-8 px-4">
          <h2 className="text-sm font-medium mb-2 text-[#01F3F4]">Your Wallets</h2>
          <ul className="space-y-2">
            {wallets.map((wallet, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-gray-500"></span>
                <span>{wallet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Wallet Input */}
        <div className="px-5 mt-4">
          <input
            type="text"
            value={newWallet}
            onChange={(e) => setNewWallet(e.target.value)}
            className="w-full p-2 rounded bg-[#1e1f2b] text-gray-200"
            placeholder="Add new wallet"
          />
          <button
            onClick={handleAddWallet}
            className="mt-2 bg-[#FE664F] text-white px-4 py-2 rounded hover:bg-[#d9434f] w-full"
          >
            Add Wallet
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-[#120D24]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#01F3F4]">Dashboard</h1>
            <p className="text-sm text-gray-400">Main Account - Bybit</p>
          </div>
          <div className="flex items-center space-x-4">
            <span>$30,701.95</span>
            <span>0.84253 BTC</span>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">Cryptocurrency Holdings</h2>
            <p className="text-lg font-bold text-white">$15,000</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">NFT Collections</h2>
            <p className="text-lg font-bold text-white">12 NFTs</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">DeFi Positions</h2>
            <p className="text-lg font-bold text-white">Lending, Staking</p>
          </div>
          <div className="bg-[#171031] p-4 rounded text-center">
            <h2 className="text-sm font-medium text-gray-400">Historical Performance</h2>
            <p className="text-lg font-bold text-green-400">+23.45%</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-[#171031] p-6 rounded mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Portfolio Analytics</h2>
            <div className="flex items-center space-x-2">
              <button className="bg-[#01F3F4] text-[#171031] px-4 py-2 rounded">
                Allocation
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div className="bg-[#01F3F4] h-3 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs text-gray-400">65%</p>
              </div>
              <button className="bg-[#171031] text-gray-400 px-4 py-2 rounded">
                PNL
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div className="bg-green-400 h-3 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <p className="text-xs text-gray-400">75%</p>
              </div>
              <button className="bg-[#171031] text-gray-400 px-4 py-2 rounded">
                Risk
              </button>
              <div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <p className="text-xs text-gray-400">40%</p>
              </div>
            </div>
          </div>
          {/* Placeholder for a graph */}
          <div className="h-48 bg-[#1e1f2b] rounded"></div>
        </div>

        {/* Transaction History */}
        <div className="bg-[#171031] p-6 rounded mt-6">
          <h2 className="text-lg font-medium mb-4">Transaction History</h2>
          <table className="w-full text-sm text-gray-400">
            <thead>
              <tr>
                <th className="text-left py-2">ID</th>
                <th className="text-left py-2">Asset</th>
                <th className="text-left py-2">Action</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td className="py-2">{tx.id}</td>
                  <td className="py-2 text-white">{tx.asset}</td>
                  <td className="py-2">{tx.action}</td>
                  <td className="py-2">{tx.date}</td>
                  <td className="py-2">{tx.amount}</td>
                  <td
                    className={`py-2 ${
                      tx.status === "Completed" ? "text-green-400" : "text-blue-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={loadMoreTransactions}
            className="mt-4 bg-[#FE664F] text-white px-4 py-2 rounded hover:bg-[#d9434f]"
          >
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}
