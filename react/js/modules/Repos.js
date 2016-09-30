import React from 'react';
import {
	Link
} from 'react-router';
import {
	browserHistory
} from 'react-router'

export default React.createClass({
	// ask for `router` from context
	contextTypes: {
		router: React.PropTypes.object
	},
	// add this method
	handleSubmit(event) {
		event.preventDefault();
		const userName = event.target.elements[0].value;
		const repo = event.target.elements[1].value;
		const path = `/repos/${userName}/${repo}`;
		// console.log(path);
		// browserHistory.push(path);
		this.context.router.push(path);
	},
	render() {
		return <div>
    	<h2>Repos</h2>
    	<ul>
	    	<li>
		<Link to="/repos/reactjs/react-router">
		    		React Router
		    	</Link>
	    	</li>
          <li>
	          <Link to="/repos/facebook/react">
	         	 React
	          </Link>
          </li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
    	</ul>
    	{this.props.children}
    </div>
	}
})
