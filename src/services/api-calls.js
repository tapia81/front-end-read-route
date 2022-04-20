import axios from 'axios';

export const getAllBooks = async () => {
	let res = axios.get('http://localhost:3001/books');
	return res;
};
