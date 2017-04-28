import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';

export default class myfirstapp extends Component {
	render() {
		return (
			<View>
				<Component5 />
			</View>
		);
	}
}

AppRegistry.registerComponent('myfirstapp', () => myfirstapp);
