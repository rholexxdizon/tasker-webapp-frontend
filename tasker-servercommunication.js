/*
This will be a library of functions that communicato to the
tasker server via REST API
*/

import { SETTINGS } from './settings.js';

async function auth(usrname, psword) {
	var url = SETTINGS.hostname + SETTINGS.apiEndpoints.login;

	let user = {
		username: usrname,
		password: psword
	};

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});
}


