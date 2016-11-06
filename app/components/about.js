import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';

export default class About extends Component {


	render() {
		return (
			<div className="about-container">
				<div className="container">
					<div className="container-header">
						<Panel>
							<h2>T1 Tires is 100% mobile, we mount, balance and perform all additional services on site!</h2>
							<Button bsStyle="danger">Schedule Service Today!</Button>
						</Panel>
						<hr className="line" />
					</div>
					<Panel>
						<h1>About Us</h1>
					<div className="about-top">
						<img src="app/images/mobile.png" />
						<h4 className="flex-item"><strong>T1 Tires</strong> is a mobile tire service that offers quality service and product. There is no need to go to a shop and wait or get dropped off anymore when T1 Tires can take care of you from the convenience of your desired location. Our truck and trailer has all of the equipments needed to perform the necessary tire service of mounting and balancing. Our goal is to save time and money for our customers and to provide information to help choose the right tire(s).</h4>
					</div>
					</Panel>
				<hr className="line" />
			<Panel>
				<h1>How It Works</h1>
				<div className="about-bottom">
					<h4 className="center font-lg">Get a quote, set appointment, and wheel come to you!</h4><br/>
					<h4>1. You can get a quote from us by contacting us at (661) 745-8826 or by email to sales@t1tires.com</h4>
					<h4>2. The quote will be given as installed pricing which means what you see is what you pay. There will be no hidden fees that will surprise you. Installed pricing will include price of tire(s), sales tax, mounting, balancing, and disposal of old tires.</h4>
					<h4>3. Once you agree on the pricing the next step would be to make an appointment for our technician to come and service your tire(s). This can be done through our website www.t1tires.com or by calling us at (661) 745-8826.</h4>
					<h4>4. The day of the appointment just sit back and relax while we do all the work. </h4>
				</div>
			</Panel>


				</div>
			</div>
			)
	}
}
