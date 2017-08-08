import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Welcome to the Book Club</h1>
				<h2>
					<a href="/auth/facebook">Signin With Facebook</a>
				</h2>
				<h2>
					<a href="/auth/google">Signin With Google</a>
				</h2>
			</div>
		);
	}
}

export default App;
