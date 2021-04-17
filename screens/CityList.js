import React from 'react';
import {PermissionsAndroid, Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import CityItem from '../components/CityItem';
import {getCities} from '../api/functions';

export default class CityList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			cities: []
		}
	}

	navigateToCityDetail = (data) => {
		this.props.navigation.navigate('CityDetail', {city:data})
	}

    _authorize = async () => {
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'Example App',
                'message': 'Example App access to your location '
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the location")
              //alert("You can use the location");
            } else {
              console.log("location permission denied")
              //alert("Location permission denied");
            }
          } catch (err) {
            console.warn(err)
          }

    }
	_getLocation = () => {
		Geolocation.getCurrentPosition(
			(position) => {
			  console.log(position);
			},
			(error) => {
			  // See error code charts below.
			  console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
    }
	

	_getCities = () => {
		getCities()
		.then(response => {
			console.log('response')
			this.setState({cities:response.list});
		})
		.catch(error => {
			console.log('error')
			console.log(error);
		})
	}

	componentDidMount(){
		this._getCities();
		this._getLocation();
	}

	render(){
		return (
			<View style={styles.container}>
				<FlatList 
					data={this.state.cities}
					keyExtractor={(item) => item.name}
					renderItem={({index, item}) => <CityItem navigateToCityDetail={this.navigateToCityDetail} city={item} />}
				/>
			</View>
		)

	}

}


const styles = StyleSheet.create({
	container:{
		flex:1,
	}

})
