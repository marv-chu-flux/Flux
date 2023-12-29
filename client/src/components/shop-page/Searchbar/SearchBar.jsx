import { useState, useEffect } from "react";
import { fetchData } from "../../../utils/utils";
import "./searchBar.css";

import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [noProductFound, setNoProductFound] = useState(false);

  useEffect(() => {
    const fetchDataForSearch = async () => {
      try {
        const response = (await fetchData("https://fakestoreapi.com/products"))[0];

        const capitalLetter = (searchWord) => {
          return searchWord.charAt(0).toUpperCase() + searchWord.slice(1).toLowerCase();
        };
  
        const SearchValueCapital = capitalLetter(searchValue);
  
        const filterItems = response.filter((item) =>
          item.title.includes(SearchValueCapital)
        );

        setItems(filterItems);
        setNoProductFound(filterItems.length === 0);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataForSearch();
  }, [searchValue]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
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

      {noProductFound ? (
        <p className="no-product-found">No product found</p>
      ) : (
        <ul className="search-results">
          {items.map((result) => (
            <li key={result.id}>
              <Link
                to={`/shop/${result.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div><img alt="item" src={result.image} /></div>
                <h4>{result.title}</h4>
                <p>${result.price.toFixed(2)}</p>
              </Link>
              <button>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
