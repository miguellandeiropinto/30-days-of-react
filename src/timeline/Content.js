/**
 * Created by Utlizador on 03/04/2017.
 */
import React from 'react';
import Activity from './Activity';

class Content extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let {activitiesList} = this.props;
		return (
			<div className="to-do-content row">
				<ul className="to-do-list">
					{ activitiesList.map((a) => {
						return (
							<Activity activity={a}/>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default Content;

