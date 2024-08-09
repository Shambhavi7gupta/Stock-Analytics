import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import { mockHistoricalData } from "../constants/mock";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  CartesianGrid,
} from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from "../utils/helpers/date-helper";
import { chartConfig } from "../constants/config";

const Chart = () => {
  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState(mockHistoricalData);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <Card>
      <ul className="flex absolute top-0 right-2 z-40 ">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)} className=" border-gray-800 top-5">
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="1 0"
            vertical={true}
            horizontal={false}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
            formatter={(value) => `$${value}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4F46E5" // Set the line color to match the design
            strokeWidth={1} // Set line thickness
            fill="url(#chartColor)"
            fillOpacity={1}
          />

          <XAxis
            dataKey="date"
            axisLine={true}
            tickLine={false}
            tick={{ fill: darkMode ? "#9CA3AF" : "#6B7280" }}
          />
          <YAxis
            domain={["dataMin", "dataMax"]}
            axisLine={true}
            tickLine={false}
            tick={{ fill: darkMode ? "#9CA3AF" : "#6B7280" }}
            tickFormatter={(tick) => `$${tick}`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
