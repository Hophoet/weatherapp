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
					style={styles.content}
					onPress={() => this.props.navigateToCityDetail(city)}
				>
					<View style={styles.column1}>
						<Text style={styles.cityName}>{city && city.name}</Text>
						<Text style={styles.cityWeather}> Cloudy </Text>
					</View>
					<View style={styles.column2}>
						<Text style={styles.cityTemperature}>34°c</Text>
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
