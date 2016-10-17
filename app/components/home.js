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
							<h3>Lorem ipsum dolor sit amet</h3>
							<img src="app/images/vision.png"></img>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>	
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
									      <ControlLabel>Message (optional):</ControlLabel>
									      <FormControl className="msg-text" componentClass="textarea" placeholder="textarea" />
								    </FormGroup>
								     <Button bsStyle="danger" type="submit">
								      	Submit
								    </Button>
									</form>
									</Well>
									<div className="appt-right-box">
										<h2>Or Call Us 1(555) 555-5555.</h2>
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
