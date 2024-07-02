import Main from "../body/Main";
import Header from "../body/Header";
import Footer from "../body/FooterComponent";

function HomePage({ cartCount, onAddToCart }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <Main onAddToCart={onAddToCart} />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
