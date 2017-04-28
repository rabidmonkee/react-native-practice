import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';

export default class Component5 extends Component {
	constructor(){
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
			userDataSource: ds,
	    };
	}

	componentDidMount(){
		this.fetchUsers();
	}

	fetchUsers (){
		fetch('http://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					userDataSource: this.state.userDataSource.cloneWithRows(response)
				});
		});
	}

	renderRow(user, sectionId, rowId, highlightRow){
		return (
			<View style={styles.row}>
				<Text style={styles.rowText}>{user.name}</Text>
			</View>
		)
	}

	render() {
		return (
			<View>
				<Text style={{color: '#000', textAlign: 'center'}}>
					{'\n'}
					Component 5
				</Text>
				<ListView
					dataSource={this.state.userDataSource}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#ccc',
		marginBottom: 5
	},
	rowText: {
		flex: 1,
		color: '#000',
		fontWeight: 'bold'
	}
})

AppRegistry.registerComponent('Component5', () => Component5);
