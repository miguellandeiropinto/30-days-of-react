/**
 * Created by Utlizador on 03/04/2017.
 */
import React from 'react';
import Header from '../timeline/Header';
import Content from '../timeline/Content';

class Timeline extends React.Component
{
	constructor(props){
		super(props);
	}

	render(){
		const {activitiesList} = this.props;
		return (
			<div className="frame row">
				<Header title={this.props.title}/>
				<Content activitiesList={activitiesList}/>
			</div>
		);
	}

}

export default Timeline;