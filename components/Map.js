import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'


export default class Map extends React.Component {
	constructor(props){
		super(props)
	}


	render(){
		let city = this.props.city;
		return (
			<View style={styles.container}>
			 <MapView
				provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
				      latitude: city.coord.lat,
					  longitude: city.coord.lon,
					  latitudeDelta: 0.0922,
					  longitudeDelta: 0.0421
				}}
				 >
				<Marker
					coordinate={{
						latitude:city.coord.lat,
						longitude:city.coord.lon,
					}}	
					image={require('../assets/marker.png')}
					title={city.name}

				/>
				 </MapView>
		</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingVertical:5,
		paddingHorizontal:5,
	},
	map: {
	   ...StyleSheet.absoluteFillObject,
	 },


})
