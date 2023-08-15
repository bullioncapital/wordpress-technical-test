import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const apiKey = "84026b5b-3199-44d6-892f-2f4a5a536c52"; //My Coinmarketcap API key

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

function generateFakeData() {
// Generated fake data for the sake of this technical test as the Historical Data Coinmarketcap API is only available on the professionalplan

  const fakeData = [];
  for (let i = 0; i < 6; i++) {
    const percentChange = faker.datatype.number({
      min: 5,
      max: 25,  
    });
    fakeData.push(percentChange);
  }
  return fakeData;
}

function CryptoPriceChart( percent_change_24h ) {
  const percentChange7d = generateFakeData();

  const isPositiveChange = percent_change_24h > 0;
  const colorClass = isPositiveChange ? 'rgb(88, 185, 165)' : 'rgb(255, 25, 25)';
  const bgColorClass = isPositiveChange ? 'rgb(88, 185, 165, 0.2)' : 'rgb(255, 25, 25, 0.2)';

  const chartData = {
    labels,
    datasets: [
      {
        label: "Percentage Change in 7 Days",
        data: percentChange7d,
        fill: true,
        borderColor: colorClass,
        backgroundColor: bgColorClass,
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
        borderSkippped: false,
      },
    ],
  };

  const options = {
    responsive: true, 
      plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            ticks: {
                display: false, 
            },
            grid: {
                display: false, // Remove Y-axis grid lines
                color: (context) => {
                  if (context.index === 0) {
                      return '';
                  } else {
                      return 'rgba(0, 0, 0)';
                  }
              }
            },
        },
        x: {
            ticks: {
                display: false,
            },
            grid: {
                display: false, // Remove X-axis grid lines
                color: (context) => {
                  if (context.index === 0) {
                      return '';
                  } else {
                      return 'rgba(0, 0, 0)';
                  }
              }
            },
        }
    }
  };

  return <Line data={chartData} options={options} />;
}

import btcSymbol from "../assets/icons/btc.svg";
import dashSymbol from "../assets/icons/dash.svg";
import ethSymbol from "../assets/icons/eth.svg";
import usdtSymbol from "../assets/icons/usdt.svg";
import ltcSymbol from "../assets/icons/ltc.svg";

const imageMapping = {
  BTC: btcSymbol,
  LTC: ltcSymbol,
  ETH: ethSymbol,
  USDT: usdtSymbol,
  DASH: dashSymbol,
};

const tableBlockDivToUpdate = document.querySelectorAll(".table-section-block-update");

tableBlockDivToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<TableComponent {...data} />, div);
  div.classList.remove("table-section-block-update");
});


function TableComponent(props) {  
  const [activeTab, setActiveTab] = useState(1);
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(null); //Catch error if API call fails

  const getCryptoList = async () => {
    try {
      const response = await axios.get(
        // Using "cors-anywhere" to serve API due to "no-client" support from Coinmarketcap
        `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,LTC,USDT,DASH&CMC_PRO_API_KEY=${apiKey}`
      );

      if (response.data.data) {
        // success
        setCryptoList(Object.values(response.data.data));
        // console.log(response.data.data);
      }
    } catch (err) {
      response = null;
      // error
      console.log(err);
      setError("An error occurred while fetching data. Please try again later.");
      {error && (
        <div className="text-red-500 text-center my-4">{error}</div>
      )}
      
    }
  };

  useEffect(() => {
    getCryptoList();
  }, []);


  return (
    <>
      {/* Table Chart */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-8">
        <div className="mx-auto md:max-w-5xl">
          <h2 className="text-4xl text-black text-center font-medium tracking-tight mb-6">
            {props.tableHeading}
          </h2>
        </div>
        {/* Navigation */}
        <div class="mx-auto md:px-6 space-y-8">
          <div className="flex justify-center">
            <div className="flex">
              <button
                className={`py-2 px-4 font-semibold focus:outline-none ${
                  activeTab === 1
                    ? "border-b-2 border-blue-500 transition-border-color duration-400 ease-in-out text-black"
                    : "border-b-2 border-slate-300 text-gray-400"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Tab item 1
              </button>
              <button
                className={`py-2 px-4 font-semibold focus:outline-none ${
                  activeTab === 2
                    ? "border-b-2 border-blue-500 transition-border-color duration-400 ease-in-out text-black"
                    : "border-b-2 border-slate-300 text-gray-400"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Tab item 2
              </button>
              <button
                className={`py-2 px-4 font-semibold focus:outline-none ${
                  activeTab === 3
                    ? "border-b-2 border-blue-500 transition-border-color duration-400 ease-in-out text-black"
                    : "border-b-2 border-slate-300 text-gray-400"
                }`}
                onClick={() => setActiveTab(3)}
              >
                Tab item 3
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-8 px-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0"
                      >
                        <span className="text-md group inline-flex">
                          Coin Details
                          
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
                      >
                        <span className="text-md group inline-flex">
                          Last Price
                          <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 text-md group-hover:bg-gray-200"></span>
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
                      >
                        <span className="text-md group inline-flex">
                          24h Change
                          
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
                      >
                        <span className="text-md group inline-flex">
                          Market Cap
                          
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
                      >
                        <span className="text-md group inline-flex">
                          Markets
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Object.values(cryptoList).length > 0 &&
                      cryptoList.map((crypto) => (
                        <tr key={crypto.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-smtext-gray-500 sm:pl-0 relative">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                              <img
                                src={ imageMapping[crypto.symbol] } // Mapped over with corresponding symbols
                                alt={`${crypto.symbol} Icon`}
                                className="hidden md:block md:w-5 md:h-5 md:mr-2"
                                key={crypto.id} // unique key for each item in the map loop
                              />
                              <span>{crypto.name}</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-0">
                          ${crypto.quote.USD.price.toLocaleString("en-UK", { maximumFractionDigits: 5 })}                            
                          </td>
                          <td
                            className={`whitespace-nowrap px-3 py-4 text-sm font-medium ${
                              crypto.quote.USD.percent_change_24h > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {(crypto.quote.USD.percent_change_24h).toFixed(2)}%
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            
                            ${parseFloat(crypto.quote.USD.market_cap / 1000000).toLocaleString("en-UK", { maximumFractionDigits: 2 })}
                            M
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="chart-container" style={{ width: '100%', height: '50px' }}>
                            <CryptoPriceChart />
                          </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
              View All Markets
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
