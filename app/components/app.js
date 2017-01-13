import React from 'react';
import { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<div className="body-container">
        	{ /* this.props.children */ }
          <div>
            <h2 style={{textTransform: 'none', paddingTop: '100px', textAlign: 'center'}}>Website under construction but feel free to contact us by email <a href="sales@t1tires.com">Sales@T1tires.com</a> or by phone (661) 745-8826."</h2>
        	</div>
        </div>
      </div>
    );
  }
}
