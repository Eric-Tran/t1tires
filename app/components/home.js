import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/index';

import Carousel from './carousel';

import { Panel, Button } from 'react-bootstrap';

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
							<h2>Our Service Area</h2>
							<Panel className="service-panel">
							<img src="app/images/servicemap.png" />
							</Panel>
						</div>
						<div className="appt-box">
							<h2>Schedule Appointment</h2>
							<Panel>

							</Panel>
						</div>
					</div>

				</div>

			</div>

			)
	}
}
