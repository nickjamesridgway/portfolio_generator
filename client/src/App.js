import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import Navbar from "./components/navbar.js"
import Newportfolio from "./pages/newportfolio.js"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component="newportfolio"></Route>
        </Switch> */}

        <Newportfolio />
      </Router>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
