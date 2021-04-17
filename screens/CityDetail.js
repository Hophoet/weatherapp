
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CityItem extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<View style={styles.container}>
				<Text>City item</Text>
				<Text
					onPress={() => {this.props.navigation.navigate('CityList')}}
					> NAVIGATE BACK TO LIST </Text>
			</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}

})
