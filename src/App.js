import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import Catalog from "./components/catalog";
import GroceryList from "./components/grocerylist";
import Footer from "./components/footer";
import AboutMe from "./components/about";
import Cart from "./components/cart"
import {} from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return ( 
        <BrowserRouter>
        <div className = "App">
        <NavBar> </NavBar> 
        <Switch>
        <Route path = "/" exact component={HomePage}></Route>
        <Route path = "/about" component={AboutMe}></Route>
        <Route path = "/catalog" exact component={Catalog}></Route> 
        <Route path = "/grocerylist" exact component={GroceryList}></Route>
        <Route path = "/cart" exact component={Cart}></Route>
        </Switch> 
        <Footer> </Footer> 
        </div> 
        </BrowserRouter>
    );
}

export default App;