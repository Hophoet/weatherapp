import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CityItem extends React.Component {
	constructor(props){
		super(props)
	}

	_convertTemperatureFTC = (temp) => temp//(temp-32)/1.8

	render(){
		let city = this.props.city
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.content}
					onPress={() => this.props.navigateToCityDetail(city)}
				>
					<View style={styles.column1}>
						<Text style={styles.cityName}>{city && city.name}</Text>
						<Text style={styles.cityWeather}>{city && city.weather[0].description}</Text>
					</View>
					<View style={styles.column2}>
						<Text style={styles.cityTemperature}>{this._convertTemperatureFTC(city.main.temp)}°c</Text>
					</View>
				</TouchableOpacity>
			</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingVertical:5,
		marginTop:5,
		paddingHorizontal:5,
	},
	content:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	column1:{
		flex:4,
	},
	cityName:{
		fontSize:18,
	},
	cityWeather:{
		opacity:.5
	},
	cityTemperature:{
		fontSize:30,
	}

})
