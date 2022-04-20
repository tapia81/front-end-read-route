import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAllBooks } from '../services/api-calls';

export const Home = () => {
	const [ booksData, setBooksData ] = useState([]);
	useEffect(() => {
		getAllBooks().then((res) => setBooksData(res.data));
	}, []);

	console.log(booksData);
	return (
		<div className="bookContainer">
			{booksData.map((data, key) => {
				// console.log(data.genres);
				return (
					<div key={key}>
						<h2>{data.title}</h2>
						<p>By {data.author}</p>
						<img src={data.imageLink} />
						{data.genres.map((data, key) => {
							return (
								<div key={key}>
									<p>{data}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
