import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const activitiesList = [
	{
		timestamp: new Date().getTime(),
		user: {
			id: 1,
			name: "Miguel",
		},
		todo: "A minha primeira React App! #reactjs #js"
	},
	{
		timestamp: new Date().getTime(),
		user: {
			id: 1,
			name: "Liliana",
		},
		todo: "A jogar Episode! Hahaha"
	}
];

ReactDOM.render(
  <App activitiesList={activitiesList}/>,
  document.querySelector('#day1')
);

