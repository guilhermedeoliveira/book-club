import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './Landing';
import * as actions from '../actions';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
