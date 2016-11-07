import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';

export default class Contact extends Component {


	render() {
		return (
			<div className="contact-container">
				<div className="container">
					<div className="container-header">
						<Panel>
							<h2>T1 Tires is 100% mobile, we mount, balance and perform all additional services on site!</h2>
							<Button bsStyle="danger">Schedule Service Today!</Button>
						</Panel>
						<hr className="line" />
					<Panel>
						<h1>Contact Us</h1>
						<div className="flex-parent">
							<div className="left-flex">
								<h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h4>
								<h4>
									<strong>Contact</strong><br/>
									Service@t1tires.com | 661-745-8826<br/><br/>
									<strong>Mailing Address</strong><br/>
									829 W. Palmdale Blvd. Suite 129
									Palmdale, CA 93551
								</h4>
							</div>
							<div className="right-flex">
								<img src="app/images/palmdale.png" />
							</div>
						</div>
					</Panel>
					</div>
				</div>
			</div>
			)
	}
}