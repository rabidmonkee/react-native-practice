import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Brad',
			showName: true,
			message: this.props.message
		};
	}

	static defaultProps = {
		message: 'Hi There'
	}

	render() {
		let name = this.state.showName ? this.state.name : 'viewer';
		return (
			<View>
				<Text style={{color: '#ff0066', textAlign: 'center'}}>
					Component 1{'\n'}
					{this.state.message} {name}?{'\n'}
					{'\n'}
				</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Component1', () => Component1);
