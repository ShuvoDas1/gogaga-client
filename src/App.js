import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCollections from './components/AddCollections/AddCollections';
import Navbar from './components/Home/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/addCollection'>
            <AddCollections></AddCollections>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
