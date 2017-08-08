import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>Welcome to the Book Club</h2>
				<h4>
					<a href="/auth/facebook">Login With Facebook</a>
				</h4>
				<h4>
					<a href="/auth/google">Login With Google</a>
				</h4>
			</div>
		);
	}
}

export default Landing;
