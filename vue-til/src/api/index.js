import axios from 'axios';

// const config = {
// baseUrl: 'http://localhost:3000/',
// };

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

export function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

export function loginUser(userData) {
	return instance.post('login', userData);
}
