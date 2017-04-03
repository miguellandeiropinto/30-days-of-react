import React, {Component} from 'react';

import Timeline from './timeline/Timeline';
import Clock from './clock/Clock';

class App extends Component {
	render () {
		var styles_map = {};
		let {activitiesList} = this.props;
		return (
			<div className="app">
				<Timeline title="Timeline" activitiesList={activitiesList}/>
				<Clock/>
			</div>
		);
	}
}

export default App;
