import React, { useContext, useState } from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import "./Header.css";
import Overview from "./Overview";
import StockContext from "../context/StockContext";
import { mockCompanyDetails } from "../constants/mock";
const Header = ({ name }) => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  return (
    <>
      <div className="header">
        <h1>
          63,179.71
          <span style={{ fontSize: 12, bottom: 20 }}>USD</span>
        </h1>
        <p className="percentage">+2,161.42 (3.54%)</p>
      </div>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;
