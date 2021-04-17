import {API_URL} from './config';

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



export {
	getCities
}
