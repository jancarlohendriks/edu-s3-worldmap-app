export default function authorize() {

	const url = new URL('https://identity.fhict.nl/connect/authorize');

	const params = new URLSearchParams({
		response_type: 'code',
		client_id: 'i303476-interactiv',
		scope: 'fhict fhict_personal',
		redirect_uri: 'http://localhost:8080'
	});

	url.search = params;
	
	window.location.href = (url);

}