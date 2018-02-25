import React, { Component } from 'react';
import logo from './money-bag.svg';
import './Home.css';
import { Sidebar, Segment, Menu, Icon, Button, Image } from 'semantic-ui-react';

class Navbar extends Component {
		constructor(props) {
			super(props);
		}
		handleClick(event) {
			console.log("Item was clicked");
		}
	  render() {
	    return (
	      <div>
	        <Menu inverted stackable>
	          <Menu.Item><Image src={logo} size="mini"/></Menu.Item>
	          <Menu.Item><h1>SPENSIVE</h1></Menu.Item>
	          <Menu.Menu position='right'>
						<Menu.Item name='home' onClick={() => this.handleClick()}/>
							<Menu.Item name='account summary' onClick={() => this.handleClick()}/>
	          </Menu.Menu>
	        </Menu>
	      </div>
		);
  }
}

export default Navbar;
