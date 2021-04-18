import React from 'react';
import {PermissionsAndroid, Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import CityItem from '../components/CityItem';
import {getCities, getTemp} from '../api/functions';
import {SET_USER_LOCATION} from '../redux/store/actions';

import PushNotification from 'react-native-push-notification';

class CityList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			cities: []
		}
	}


	_makeLocalNotification = (temp) => {
		PushNotification.localNotificationSchedule({
		  message: `Current temperature ${temp}°c`, // (required)
		  date: new Date(Date.now() + (4 * 1000)), // in 60 secs
		  channelId:'com.weatherapp'
		});
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
				let action = {type:SET_USER_LOCATION, value:position};
				this.props.dispatch(action)
				//console.log('location from redux')
				//console.log(this.props.userLocation);
			
			},
			(error) => {
			  // See error code charts below.
			  console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
    }

	_getTem = () => {
		if(this.props.userLocation){
			let lat = this.props.userLocation.coords.latitude;
			let lon = this.props.userLocation.coords.longitude;
			console.log(lat, lon)
			getTemp(lat, lon)
			.then(response => {
				console.log('user temperature response')
				console.log(response.main.temp)
				this._makeLocalNotification(response.main.temp);
			})
			.catch(error => {
				console.log('error')
				console.log(error);
			})
		}

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
		this._getTem();
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

export default connect(mapStateToProps, mapDispatchToProps)(CityList);


const styles = StyleSheet.create({
	container:{
		flex:1,
	}

})
