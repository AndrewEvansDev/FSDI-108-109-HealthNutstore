import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';
import GroceryList from './components/todo';


function App() {
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
      <hr />
      <GroceryList></GroceryList>
    </div>
  );
}

export default App;
