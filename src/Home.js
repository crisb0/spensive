import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import logo from './money-bag.svg';
import './Home.css';
import { Sidebar, Segment, Menu, Icon, Button, Image } from 'semantic-ui-react';

const routes = [
	{
		path: "/",
		exact: true
	},
	{
		path: "/shoelaces",
		component: Shoelaces
	}
];

const Shoelaces = () => <p>shoelaces page</p>;

class Navbar extends Component {
		constructor(props) {
			super(props);
		}



	  render() {
	    return (
				<Router>
	      <div>
	        <Menu inverted stackable className='PageMargins'>
	          <Menu.Item><Link to="/"><Image src={logo} size="mini"/></Link></Menu.Item>
	          <Menu.Item><h1>SPENSIVE</h1></Menu.Item>
	          <Menu.Menu position='right'>
						<Menu.Item name='home'><NavLink to="/">Home</NavLink></Menu.Item>
							<Menu.Item name='account summary'><NavLink to="/shoelaces">Account Summary</NavLink></Menu.Item>
	          </Menu.Menu>
	        </Menu>
	      </div>
				</Router>
		);
  }
}

class HomeBody extends Component {
	render() {
		return(
			<div classname="PageMargins">
				<p>hello!!!</p>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<HomeBody />
			</div>
		);
	}
}

export default App;
