import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';

import Carousel from './carousel';

import { Panel, Well, Button, Form, FormControl, FormGroup, ControlLabel, FieldGroup } from 'react-bootstrap';

export default class Home extends Component {


	render() {
		return (
			<div className="home-container">
				<Carousel/>
				<div className="container">
					<Panel>
						<h2>T1 Tires is 100% mobile, we mount, balance and perform all additional services on site!</h2>
						<Button bsStyle="danger">Schedule Service Today!</Button>
					</Panel>
					<hr className="line" />
					<div className="box-wrapper">
						<Panel className="info-box">
							<h3>Our Mission</h3>
							<img src="app/images/vision.png"></img>
							<p>T1 Tires mission is to provide our customers with exceptional customer service, competitive pricing and brands you can trust. For convenience we offer a value added service that comes straight to you to service your tire(s) needs. Let us take the hassle off your plate and give back your peace of mind. Our priority is safety and getting you back on the road with confidence in your tires.</p>	
						</Panel>
						<Panel className="info-box">
							<h3>Duis aute irure dolor</h3>
							<img src="app/images/thumb.png"></img>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>	
						</Panel>
						<Panel className="info-box">
							<h3>Ut enim ad minima</h3>
							<img src="app/images/promise.png"></img>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptase</p>
						</Panel>
					</div>
					<hr className="line" />
					<div className="bottom-content">
						<div className="service-box">
							<h2 className="npd-top">Our Service Area</h2>
							<Panel className="service-panel">
							<img src="app/images/servicemap.png" />
							</Panel>
						</div>
						<hr className="line" />
						<div className="appt-box">
							<h2 className="npd-top">Schedule Appointment</h2>
							<Panel>
								<div className="appt-panel">
								<Well className="appt-well">
									<form>
										<FormGroup controlId="formControlsSelect">
									      <ControlLabel>Select Service Area:</ControlLabel>
									      <FormControl componentClass="select" placeholder="select">
									         <option value="select">select</option>
									         <option value="other">Lancaster</option>
									         <option value="other">Palmdale</option>
									         <option value="other">Ventura</option>
									         <option value="other">Oxnard</option>
									         <option value="other">Bakersfield</option>
									         <option value="other">Thousand Oaks</option>
									         <option value="other">Los Angeles</option>
									      </FormControl>
									   </FormGroup>
										<FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Name:</ControlLabel>
									      <FormControl type="text" placeholder="Enter Name" />
									   </FormGroup>
									   <FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Email Address:</ControlLabel>
									      <FormControl type="text" placeholder="Enter Email" />
									   </FormGroup>
									   <FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Phone Number:</ControlLabel>
									      <FormControl type="text" placeholder="Enter Phone Number" />
									   </FormGroup>
									   <FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Date:</ControlLabel>
									      <FormControl type="date" placeholder="Enter Phone Number" />
									   </FormGroup>
									   <FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Time:</ControlLabel>
									      <FormControl type="time" placeholder="Enter Phone Number" />
									   </FormGroup>
									   <FormGroup controlId="formControlsTextarea">
									      <ControlLabel>Message (optional):</ControlLabel>
									      <FormControl className="msg-text" componentClass="textarea" placeholder="Enter a message..." />
								    </FormGroup>
								     <Button bsStyle="danger" type="submit">
								      	Submit
								    </Button>
									</form>
									</Well>
									<div className="appt-right-box">
										<h2>Or Call Us <strong>(661) 745-8826</strong>.</h2>
										<img className="appt-img" src="app/images/mobile.png" />
										<h2>Schedule Your Service Today!</h2>
									</div>
								</div>
							</Panel>
						</div>
					</div>

				</div>

			</div>

			)
	}
}
