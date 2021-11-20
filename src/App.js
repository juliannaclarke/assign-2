import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar';
import {Home} from "./components/pages/home/index";
import {Cart} from "./components/pages/cart/index";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
