import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Product from './components/product';
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus)

function App() {
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
