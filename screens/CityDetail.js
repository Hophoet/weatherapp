
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CityItem extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		let city = this.props.navigation.state.params.city
		return (
			<View style={styles.container}>
				<View style={styles.mapContainer}>
					<Text
						onPress={() => {this.props.navigation.navigate('CityList')}}
						> NAVIGATE BACK TO LIST </Text>
				</View>
				<View style={styles.cityInfosContainer}>
					<View style={styles.column1}>	
						<Text style={styles.cityName}>{city && city.name}</Text>
						<Text>Clear Sky</Text>
						<Text>Humidity: 70</Text>
						<Text>Wind Speed: 5.52</Text>
						<Text>Max Temp: 38°c</Text>
						<Text>Min Temp: 27°c</Text>
					</View> 
					<View style={styles.column2}>	
						<Text style={styles.cityTemperature}> 25°c</Text>	
					</View> 
				</View>
			</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	mapContainer:{
		flex:3,
		backgroundColor:'gray',
	},
	cityInfosContainer:{
		backgroundColor:'white',
		flex:1,
		flexDirection:'row',
		padding:5
	},
	column1:{
		//backgroundColor:'red',
		flex:3
	},
	column2:{
		//backgroundColor:'blue',
		flex:1.5,
		justifyContent:'center',
		alignItems:'center'
	},
	cityName:{
		fontSize:20,
	},
	cityTemperature:{
		fontSize:30
	}

})
