import React, { useState } from "react";
import "./SearchBar.css"
// import bisearch from "bootstrap-icons";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search" style={{ position: 'relative', zIndex: '2' }}>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        
        <div className="searchIcon">
         {filteredData.length === 0 ? (
             <button>Search</button>
            ) : ( 
           <button id="clearBtn" onClick={clearInput}>Clear</button>
         )}
        </div>

      </div>
      {filteredData.length != 0 && (
        <div className="dataResult" style={{ position: "absolute" }}>
          {filteredData.slice(0, 15).map((value) => {
            return (
              <a className="dataItem" href={value.link}>
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  )
}


export default SearchBar;