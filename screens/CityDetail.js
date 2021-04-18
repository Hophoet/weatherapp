
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Map from '../components/Map';

class CityDetail extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		let city = this.props.navigation.state.params.city
		return (
			<View style={styles.container}>
				<View style={styles.mapContainer}>
					<Map city={city}/>
				</View>
				<View style={styles.cityInfosContainer}>
					<View style={styles.column1}>	
						<Text style={styles.cityName}>{city && city.name}</Text>
						<Text>{city.weather[0].main}</Text>
						<Text>Humidity: {city.main.humidity}</Text>
						<Text>Wind Speed: {city.wind.speed}</Text>
						<Text>Max Temp: {city.main.temp_max}°c</Text>
						<Text>Min Temp: {city.main.temp_min}°c</Text>
					</View> 
					<View style={styles.column2}>	
						<Text style={styles.cityTemperature}>{city.main.temp}°c</Text>	
					</View> 
				</View>
			</View>
		)

	}

}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail);

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	mapContainer:{
		flex:3,
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
		alignItems:'center',
	},
	cityName:{
		fontSize:20,
	},
	cityTemperature:{
		fontSize:30,
		textAlign:'center',
	}

})
