import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          
              <Link to="/latest">Latest</Link>
   
              <Link to="/search">Search</Link>
            
        </nav>

        
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2></h2>;
}

function Latest() {
  return <div><Latest data={this.state.data}/></div>;
}

function Search() {
  return <h2></h2>;
}
