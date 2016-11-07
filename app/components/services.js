import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';

export default class Services extends Component {


	render() {
		return (
			<div className="services-container">
				<div className="container">
					<div className="container-header">
						<Panel>
							<h2>T1 Tires is 100% mobile, we mount, balance and perform all additional services on site!</h2>
							<Button bsStyle="danger">Schedule Service Today!</Button>
						</Panel>
						<hr className="line" />
						<Panel>
							<h1>Services</h1>
							<h4>
								Demounting and mounting:<br/><br/>
								Balancing:<br/><br/>
								Disposal of old tire(s):<br/><br/>
								Valve stems:<br/><br/>
								Rotation:
							</h4>

						</Panel>
					</div>
				</div>
			</div>
			)
	}
}
