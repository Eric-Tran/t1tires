import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import * as actions from '../actions/index'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {

	constructor(props) {
		super(props);
			this.state = {
				activeTabClass: "tab0"
			}
	}

	// changeActiveClass(tab) {
	// 	this.state.activeTabClass = tab;
	// }

	render() {
		// console.log(this.state.activeTabClass)
		// let activeClass = this.state.activeTabClass === "tab0" ? "active" : "";
		// let activeClass1 = this.state.activeTabClass === "tab1" ? "active" : "";
		// let activeClass2 = this.state.activeTabClass === "tab2" ? "active" : "";
		// let activeClass3 = this.state.activeTabClass === "tab3" ? "active" : "";
		// let activeClass4 = this.state.activeTabClass === "tab4" ? "active" : "";
		// let activeClass5 = this.state.activeTabClass === "tab5" ? "active" : "";
		return (
			<div className='header'>
				<nav className="navbar">
					<div className='container-fluid'>
						<div className="navbar-header">
							<Link to="/" className="navbar-brand"><img src="app/images/tirelogo1.png" /></Link>
							{ /* <ul className="nav navbar-nav">
								<li className="nav-item">
									<IndexLink className="nav-link" activeClassName="active" to="/">Home</IndexLink>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/about">About</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/services">Services</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/brands">Tire Brands</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/faq">FAQ</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
								</li>
							</ul> */ }
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

