import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';

export default class FAQ extends Component {


	render() {
		return (
			<div className="faq-container">
				<div className="container">
					<div className="container-header">
						<Panel>
							<h2>T1 Tires is 100% mobile, we mount, balance and perform all additional services on site!</h2>
							<Button bsStyle="danger">Schedule Service Today!</Button>
						</Panel>
						<hr className="line" />
						<Panel>
							<h1>FAQ</h1>
							<h4>
							Why T1 Tires?<br/><br/>
							Is T1 Tires insured?<br/><br/>
							Do T1 Tires warranty your service?<br/><br/>
							How do I schedule an appointment? <br/><br/>
							What forms of payment do you accept? <br/><br/>
							How long will it take? <br/><br/>
							How much room is needed to do the work? <br/><br/>
							</h4>
						</Panel>
					</div>
				</div>	
			</div>
			)
	}
}