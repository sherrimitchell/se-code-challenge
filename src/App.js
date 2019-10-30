import React from 'react';
import ReactDOM from "react-dom";
import { App } from 'react'; 
import { BrowserRouter as Router,
	Route,
	NavLink
	 }

// router for links to app pages - latest and search
export default function App() {
	  render() {
		  	return (
			  	<Router>
			  		<div>
				  		<div>
				  			<NavLink to="/" activeClassName="latest">
								Latest
							</NavLink>
				  		</div>
				  		<div>
				  			<NavLink to="/search" activeClassName="search">
								Search
							</NavLink>
				  		</div>
			  			
			  			<div>
					  		 <Route path="/latest">
					  		 	<Latest />
					    	</Route>

					    	<Route path="/search">
					    		<Search />
					    	</Route>
					    </div>
			  		</div>
			  	</Router>
		  );
	}
}

function Latest() {
  return (
    <div>
      <h2>Latest</h2>
    </div>
  );
}

function Search() {
  return (
    <div>
      <h2>Search</h2>
    </div>
  );
}


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
