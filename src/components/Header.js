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
        <div style={{ display: "flex", flexDirection: "row", border: 20 }}>
          <h1>63,179.71</h1>
          <span style={{ fontSize: 15, color: "gray" }}>USD</span>
        </div>
        <p className="percentage">+2,161.42 (3.54%)</p>
      </div>
      <div className="xl:px-32">
        {/* Add a class to the name */}
        <h1 className="name">{name}</h1>
        <div className="search-container">
          <Search />
        </div>
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;
