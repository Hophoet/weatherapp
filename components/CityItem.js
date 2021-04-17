import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CityItem extends React.Component {
	constructor(props){
		super(props)
	}


	render(){
		let city = this.props.city
		return (
			<View style={styles.container}>
				<TouchableOpacity

				>
					<Text>{city && city.name}</Text>
				</TouchableOpacity>
			</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		paddingVertical:5,
		backgroundColor:'gray',
		marginTop:5
	}

})
