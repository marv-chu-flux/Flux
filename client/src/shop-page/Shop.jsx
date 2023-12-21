import Footer from '../components/reusableComponents/Footer/Footer';
import Header from '../components/reusableComponents/Header/Header';
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
