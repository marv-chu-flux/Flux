import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Products from './Products';
import { Outlet } from 'react-router-dom';

export default function Shop() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
