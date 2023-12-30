import { useState, useEffect, useRef } from "react";
import { fetchData, getOptsWithBody } from "../../../utils/utils";
import "./searchBar.css";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CartButton from "../cartButton";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [noProductFound, setNoProductFound] = useState(false);

  async function cartHandler(response) {
    try {
      if (!response || typeof response.price === "undefined") {
        throw new Error("Invalid");
      }

      const postBody = getOptsWithBody({
        name: response.title,
        image_url: response.image,
        price: response.price.toFixed(2),
        quantity: 1,
      });

      console.log(await fetchData("/cart", postBody));
    } catch (error) {
      console.error("Error adding to cart:", error);
    } 

  }

  const ref = useRef(0);

  useEffect(() => {
    const fetchDataForSearch = async () => {
      try {
        const response = (
          await fetchData("https://fakestoreapi.com/products")
        )[0];

        console.log("Api Response:", response);
        console.log("Api Response Title:", response.title);

        ref.current = () => cartHandler(response);

        if (!response || response.length === 0) {
          setItems([]);
          setNoProductFound(true);
          return;
        }

        const capitalLetter = (searchWord) => {
          return searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
        };

        const SearchValueCapital = capitalLetter(searchValue);

        const filterItems = response.filter((item) =>
          item.title.includes(SearchValueCapital)
        );

        setItems(filterItems);
        setNoProductFound(filterItems.length === 0);
        cartHandler(response);
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
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <img alt="item" src={result.image} />
                </div>
                <h4>{result.title}</h4>
                <p>${result.price.toFixed(2)}</p>
              </Link>

              <CartButton cartHandler={() => cartHandler(result)} text={"hi"} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
