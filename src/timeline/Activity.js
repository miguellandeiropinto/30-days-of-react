/**
 * Created by Utlizador on 03/04/2017.
 */
import React from 'react';

class Activity extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		const {activity} = this.props;
		return (
			<li className="to-do-item">
				<label>{activity.user.name}</label><br></br>
				<span className="date">{activity.timestamp}</span>
				<p>{activity.todo}</p>
				<a href="#" className="comments-count"><span className="fa fa-comment"></span> {activity.comments.length}</a>
			</li>
		)
	}
}

export default Activity;