/**
 * Created by Utlizador on 03/04/2017.
 */
import React from 'react';

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="to-do-header">
				<h2 className="header-title">{this.props.title}</h2>
			</div>
		)
	}
}

export default Header;