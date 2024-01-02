import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../reusableComponents/Header/Header';
import Footer from '../reusableComponents/Footer/Footer';
import ItemCard from '../reusableComponents/ItemCard/Card';
import ImageSlide from '../reusableComponents/ImageSlide/ImageSlide';

function App() {
  return (
    <>
      <Header />
      <ImageSlide />
      <ItemCard />
      <Footer />
    </>
  );
}

export default App;
