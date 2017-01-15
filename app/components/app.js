import React from 'react';
import { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
      	{ /* <Header /> */ }
      	<div className="body-container">
        	{ /* this.props.children */ }
          <div style={{textAlign: 'center'}}>
            <img src="app/images/tirelogo1.png" style={{width: '40%', border: '3px solid black', borderRadius: '20px', boxShadow: 'rgba(56, 75, 105, .5) 0px 6px 9px 0px'}} alt="T1 Tires" />
            <h2 style={{textTransform: 'none'}}>Website is currently under construction. Feel free to contact us by email <a href="sales@t1tires.com">Sales@T1tires.com</a> or by phone (661) 745-8826.</h2>
        	</div>
        </div>
      </div>
    );
  }
}
