import Header from '../reusableComponents/Header/Header';
import Footer from '../reusableComponents/Footer/Footer';
import './error.css';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>This item does not exist</p>
      </div>
      <Footer />
    </>
  );
}
