import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {
  const [portfolio, setPortfolio] = useState([])
  const [search, setSearch] = useState({sort : null, filter: null})

  function handleClick(id){
    const newPortfolioStock = stocks.find((stock) => stock.id === id)
    if (!portfolio.find((stock) => stock.id === id)){
      setPortfolio([...portfolio, newPortfolioStock])}
      
    }
    console.log(portfolio)
  
  function handleSell(id){
    console.log(id)
    const updatedPortfolio = [...portfolio].filter((stock) => stock.id !== id)
    setPortfolio(updatedPortfolio)
  }

  function sortStocks(e){
    
    const updatedSearch = {...search}
    updatedSearch.sort = e
    setSearch(updatedSearch)
  }
  function filterStocks(e){
   const updatedSearch = {...search}
   updatedSearch.filter = e
   setSearch(updatedSearch)
  }

 
    if(search.sort === "Alphabetically"){
      stocks.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    } else if (search.sort === "Price") {
      stocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price
      })
    }

  function filteredStocks(){
    return (stocks.filter((stock) => !search.filter ? true : stock.type === search.filter))
  }

  
  

  console.log(search)
  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks()} handleClick={handleClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleClick={handleSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
