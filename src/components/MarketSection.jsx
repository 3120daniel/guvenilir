import React, { useEffect, useRef } from "react";

export default function MarketSection() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Prevent duplicate widgets
    chartRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL", // Change symbol here
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: "tradingview_chart"
    });

    chartRef.current.appendChild(script);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0f1115] via-[#111418] to-[#1a1d22] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Invest on most popular{" "}
          <span className="relative inline-block">
            Market
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500"></span>
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-sm md:text-base">
          Invest on our extensive range of CFDs on FX, Commodities,
          Cryptocurrencies, Shares, ETFs and more. Low costs, fast execution
          and 24/7 support.
        </p>

        {/* TradingView Chart */}
        <div className="mt-12 bg-[#14171c] rounded-2xl p-4 md:p-6 shadow-2xl">
          <div
            id="tradingview_chart"
            ref={chartRef}
            className="w-full h-[500px]"
          />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-600 rounded-xl py-6">
            <p className="text-3xl font-bold">$91+</p>
            <p className="text-gray-400 text-sm mt-2">
              Million Transactions
            </p>
          </div>

          <div className="border border-gray-600 rounded-xl py-6">
            <p className="text-3xl font-bold">49.6+</p>
            <p className="text-gray-400 text-sm mt-2">
              Thousand Active Accounts
            </p>
          </div>

          <div className="border border-gray-600 rounded-xl py-6">
            <p className="text-3xl font-bold">1.2+</p>
            <p className="text-gray-400 text-sm mt-2">
              Thousand Running Days
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
