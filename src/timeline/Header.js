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
			<div className="to-do-header row">
				<div className="col-lg-3">
					<span className="fa fa-angle-double-down"/>
				</div>
				<div className="col-lg-6">
					<h2 className="header-title">{this.props.title}</h2>
				</div>
				<div className="col-lg-3">
					<span className="fa fa-search"/>
				</div>
			</div>
		)
	}
}

export default Header;