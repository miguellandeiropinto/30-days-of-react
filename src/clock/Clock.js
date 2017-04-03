/**
 * Created by Utlizador on 03/04/2017.
 */
import React from 'react';

class Clock extends React.Component {
	constructor(props){
		super(props);
		let cdate = new Date();
		this.state = {
			hours: cdate.getHours(),
			minutes: cdate.getMinutes(),
			seconds: cdate.getSeconds(),
			ampm: cdate.getHours() >= 12 ? 'pm' : 'am'
		};

		this.setTimer();
	}
	render(){
		const {hours, minutes, seconds, ampm} = this.state;
		return (
			<div className="clock">
				<div className="inner-clock">
					{
						hours === 0 ? 12 :
							(hours > 12) ? hours - 12 : hours
					}:{
						minutes > 9 ? minutes : `0${minutes}`
					}:{
						seconds > 9 ? seconds : `0${seconds}`
					} {ampm}
				</div>
			</div>
		)
	}

	setTimer(){
		setTimeout(this.updateClock.bind(this), 1000);
	}

	updateClock(){
		let d = new Date();
		this.setState({
			hours: d.getHours(),
			minutes: d.getMinutes(),
			seconds: d.getSeconds(),
			ampm: d.getHours() >= 12 ? 'pm' : 'am'
		});
		this.setTimer();
	}

}

export default Clock