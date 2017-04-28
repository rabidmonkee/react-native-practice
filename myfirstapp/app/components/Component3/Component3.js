import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export default class Component3 extends Component {
	onPress(){
		//do something
	}
	constructor() {
		super();
		this.state = {
			textValue: '',
			switchValue: false
		};
	}

	onChangeText(value){
		this.setState({
			textValue:value
		});
	}

	onSubmit(){
		console.log('Submitted');
	}

	onSwitchChange(value)
	{
		this.setState({
			switchValue:value
		})
	}
	render() {
		return (
			<View>
				<Text style={{color: '#ffaa66', textAlign: 'center'}}>
					{'\n'}
					Component 3
				</Text>
				<TextInput
					style={{textAlign: 'center'}}
					placeholder="Enter Text"
					value={this.state.textValue}
					onChangeText={(value) => this.onChangeText(value)}
					onSubmitEditing={this.onSubmit}
				/>
				<Text style={{textAlign: 'center'}}>{this.state.textValue}</Text>
				<Switch
					value={this.state.switchValue}
					onValueChange={(value) => this.onSwitchChange(value)}
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('Component3', () => Component3);
