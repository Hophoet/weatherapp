import {API_URL, API_KEY} from './config';

function getCities() {
	return new Promise( (resolve, reject) => {
var 	myHeaders = new Headers();
		var requestOptions = {
		  method: 'GET',
		  headers: myHeaders,
		};

		fetch(API_URL, requestOptions)
		.then(response => {
			return response.json();
		})
		.then(response => {
			resolve(response);
		})
		.catch(error => {
			reject(error);
		})
	})
}


function getTemp(lat, lon) {
	return new Promise( (resolve, reject) => {
 	    var myHeaders = new Headers();
		var requestOptions = {
		  method: 'GET',
		  headers: myHeaders,
		};
		let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}` 
		fetch(URL, requestOptions)
		.then(response => {
			return response.json();
		})
		.then(response => {
			resolve(response);
		})
		.catch(error => {
			reject(error);
		})
	})
}

export {
	getCities,
	getTemp
}
