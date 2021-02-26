import React from "react";

function Stock({id, name, price, ticker, type, handleClick}) {

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => handleClick(id)}>
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{ticker + ":" + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
