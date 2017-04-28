import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Component2 extends Component {
	onPress(){
		//do something
	}
	render() {
		return (
			<View style={{backgroundColor: '#ccc', padding: 10}}>
				<Text style={styles.textBlue}>
					Component 2{'\n'}
					Click a Box
				</Text>
				<View style={styles.container}>
					<TouchableHighlight style={styles.box1} onPress={this.onPress} underlayColor='#ccc'>
						<Text>First</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.box2} onPress={this.onPress} underlayColor='#ccc'>
						<Text>Second</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.box3} onPress={this.onPress} underlayColor='#ccc'>
						<Text>Third</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flexDirection: 'row',
		height: 100
	},
	textBlue: {
		color: '#004977',
		textAlign: 'center'
	},
	box1: {
		flex: 1,
		backgroundColor: 'red',
		padding: 10
	},
	box2: {
		flex: 1,
		backgroundColor: 'white',
		padding: 10
	},
	box3: {
		flex: 1,
		backgroundColor: 'blue',
		padding: 10
	}
})

AppRegistry.registerComponent('Component2', () => Component2);
