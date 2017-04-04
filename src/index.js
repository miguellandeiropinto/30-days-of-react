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
		todo: "A minha primeira React App! #reactjs #js",
		comments:[
			{
				author: "Liliana",
				comment: "Eheheh"
			},
			{
				author: "Pedro",
				comment: "Dá-lhe forte!"
			},
			{
				author: "João Teixeira",
				comment: "Facebook encapulated!"
			}
		]
	},
	{
		timestamp: new Date().getTime(),
		user: {
			id: 1,
			name: "Liliana",
		},
		todo: "A jogar Episode! Hahaha",
		comments:[
			{
				author: "Miguel",
				comment: "Viciada!!"
			},
			{
				author: "Telmo",
				comment: "Demi linda! xD"
			}
		]
	}
];

ReactDOM.render(
  <App activitiesList={activitiesList}/>,
  document.querySelector('#day1')
);

