// import axios from "axios";
import jmespath from "jmespath";
var qs = require('qs');

// axios.defaults.withCredentials = true;

export default async function getAuthToken(code) {
	try {

		console.log(code);

		const url = new URL('https://identity.fhict.nl/connect/token');

		// let headers = new Headers({
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		// });

		// let params = new URLSearchParams();
		// params.append('grant_type', 'authorization_code');
		// params.append('code', code);
		// params.append('redirect_uri', 'http://localhost:8080');
		// params.append('client_id', 'i303476-interactiv');
		// params.append('client_secret', 'Gxx6htgcSSlws3Fbs1ze7etQg7KXcPkQk74ake1L');

		// const response = await axios.post(url, params, headers);

		// let data = new URLSearchParams();
		// data.append(`grant_type`, `authorization_code`);
		// data.append(`code`, code);
		// data.append(`redirect_uri`, `http://localhost:8080`);
		// data.append(`client_id`, `i303476-interactiv`);
		// data.append(`client_secret`, `Gxx6htgcSSlws3Fbs1ze7etQg7KXcPkQk74ake1L`);

		const options = {
			method: 'POST',
			// headers: headers,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: qs.stringify({
				'grant_type': 'authorization_code',
				'code': code,
				'redirect_uri': 'http://localhost:8080',
				'client_id': 'i303476-interactiv',
				'client_secret': 'Gxx6htgcSSlws3Fbs1ze7etQg7KXcPkQk74ake1L'
			}),
			mode: 'cors',
			credentials: 'same-origin',
			// referrerPolicy: 'origin'
		};

		// console.log(params);
		// console.log(qs.stringify(params));
		// console.log(headers);
		console.log(options);
		const response = await fetch(url, options)
			.then(res => { return res.json() });
		console.log(response);
		
		// const response = await axios.post(url, qs.stringify({
		// 	'grant_type': 'authorization_code',
		// 	'code': code,
		// 	'redirect_uri': 'http://localhost:8080',
		// 	'client_id': 'i303476-interactiv',
		// 	'client_secret': 'Gxx6htgcSSlws3Fbs1ze7etQg7KXcPkQk74ake1L'
		// }));
		// console.log(response);

		const user = fetch('https://api.fhict.nl/canvas/courses/me', {
			headers: {
				// 'Authorization': 'Bearer ' + response.data.access_token,
				'Authorization': 'Bearer ' + response.access_token,
				'Accept': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			JSON.stringify(data);
			const sorted = jmespath.search(data, "[*] | reverse(sort_by(@, &start_at))");
			const courseId = jmespath.search(sorted, "[0].id");
			const userId = jmespath.search(sorted, "[0].enrollments[0].user_id");
			return {
				courseId,
				userId
			}
		})

		return user;
	
	} catch (error){
		console.error(error)
	}

}