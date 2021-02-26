import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleClick}) {
  const thisStock = stocks.map((stock) => {
    return(
    <Stock 
      ticker={stock.ticker} 
      name={stock.name} 
      type={stock.type} 
      price={stock.price} 
      id={stock.id}
      key={stock.id}
      handleClick={handleClick}
      />)
  })
  return (
    <div>
      <h2>Stocks</h2>
        {thisStock}
    </div>
  );
}

export default StockContainer;
