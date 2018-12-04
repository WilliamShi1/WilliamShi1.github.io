import React, { Component } from 'react';

class HelloWorld extends Component {
	render() {
		return (
			<h1>Welcome to {this.props.name}'s site!</h1>
		);
	}
}
export default HelloWorld;