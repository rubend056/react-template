import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.scss'


class Toolbar extends React.Component{
	render(){
		return <div className="Toolbar">
			<Link to="/nothing">Nothing</Link>
			Toolbar
		</div>
	}
}

export default Toolbar;