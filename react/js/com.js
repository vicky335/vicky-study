import React from 'react';
import {
	render
} from 'react-dom';
import {
	Router,
	Route,
	// browserHistory,
	hashHistory,
	IndexRoute,
	IndexRedirect,
	// Redirect
} from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import Home from './modules/Home';

let routes = <Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/repos" component={Repos}>
				<Route path=":userName/:repoName" component={Repo} />
			</Route>
			<Route path="/about" component={About} />
		</Route>;

// const history = createMemoryHistory(location);

render((
	<Router routes={routes} history={hashHistory}>

	</Router>
), document.getElementById('app'));
