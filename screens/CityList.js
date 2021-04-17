import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
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
