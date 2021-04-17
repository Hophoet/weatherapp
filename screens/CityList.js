import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CityItem from '../components/CityItem';

export default class CityList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			cities: [
				{name:'bust'},
				{name:'united state'},
			]
		}
	}


	render(){
		return (
			<View style={styles.container}>
				<Text>CITY LIST</Text>
				<Text
					onPress={() => {this.props.navigation.navigate('CityDetail')}}
					> NAVIGATE TO CITY DETAIL </Text>
				<FlatList 
					data={this.state.cities}
					keyExtractor={(item) => item.name}
					renderItem={({index, item}) => <CityItem city={item} />}
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
