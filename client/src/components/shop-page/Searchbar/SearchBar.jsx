import React, { useState, useEffect } from "react";
import { fetchData } from "../../../utils/utils"; 
import "./searchBar.css";

import Form from "react-bootstrap/Form";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchDataForSearch = async () => {
      try {
        const response = (await fetchData("https://fakestoreapi.com/products"))[0];

        const capitalLetter = (searchWord) => {
          return searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
        };
  
        const SearchValueCapital = capitalLetter(searchValue);
  
        const filterItems = response.filter((item) =>
          item.title.includes(SearchValueCapital)
        );

        console.log(filterItems)
        setItems(filterItems);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataForSearch();
  }, [searchValue]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    console.log(searchValue)
  };

  return (
    <div className="search-bar-container">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Form>

    </div>
  );
};

export default SearchBar;
