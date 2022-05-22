import React, { useEffect, useState } from 'react';

const Context = React.createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState({
		isFetched: false,
		data: {},
		id:1
	});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos/`)
			.then((response) => response.json())
			.then((json) =>
				setData({
					isFetched: true,
					data: json,
					id:json.albulId
				}),
			);
	}, []);


	if (data.isFetched) {
		return (
			<Context.Provider value={{ data, setData }}>{children}</Context.Provider>
		);
	}
};

export {Context, DataProvider}
