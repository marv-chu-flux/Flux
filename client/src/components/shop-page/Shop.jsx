import Footer from '../reusableComponents/Footer/Footer';
import Header from '../reusableComponents/Header/Header';
import Products from './Products';
import { Outlet } from 'react-router-dom';
import SearchBar from './Searchbar/SearchBar';

export default function Shop() {
  return (
    <>
      <Header />
      <SearchBar/>
      <Products />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
