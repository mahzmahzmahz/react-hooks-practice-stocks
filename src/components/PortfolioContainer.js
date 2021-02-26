import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, handleClick}) {



  const addMyStock = portfolio.map((stock) => {
    return( <Stock 
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
      <h2 style={{color: "goldenrod"}}>My Portfolio</h2>
      {
       addMyStock
      }
    </div>
  );
}

export default PortfolioContainer;
