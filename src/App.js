import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";
import NoMatch from './NoMatch';

function Home() {
 return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <Router>
      <div className='App'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
