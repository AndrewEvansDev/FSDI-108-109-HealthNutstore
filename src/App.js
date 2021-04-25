import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Product from './components/product';
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <div className="contentWrap">
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
