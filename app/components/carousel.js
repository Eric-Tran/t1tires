import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import { Well } from "react-bootstrap";

export default class CarouselComponent extends Component {
	render() {
		return (
			<div>
				<Well>
					<Carousel>
				    <Carousel.Item>
				      <img width={1920} height={800} alt="900x500" src="../app/images/aston.png"/>
				      <Carousel.Caption>
				        <h3>First slide label</h3>
				        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				      </Carousel.Caption>
				    </Carousel.Item>
				    <Carousel.Item>
				      <img width={1920} height={800} alt="900x500" src="../app/images/porche.png"/>
				      <Carousel.Caption>
				        <h3>Second slide label</h3>
				        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				      </Carousel.Caption>
				    </Carousel.Item>
				    <Carousel.Item>
				      <img width={1920} height={800} alt="900x500" src="../app/images/ferrari.png"/>
				      <Carousel.Caption>
				        <h3>Third slide label</h3>
				        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				      </Carousel.Caption>
				    </Carousel.Item>
				  </Carousel>
			  </Well>
		  </div>
		)
	}
}