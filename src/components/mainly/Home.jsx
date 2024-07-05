import Main from "../body/Main";
import Header from "../body/Header";
import Footer from "../body/FooterComponent";

function HomePage({ cartCount, onAddToCart, handleSearch }) {
  return (
    <>
      <Header cartCount={cartCount} handleSearch={handleSearch} />
      <Main onAddToCart={onAddToCart} />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
