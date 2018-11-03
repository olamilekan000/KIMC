import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider'; 
import '../../node_modules/react-animated-slider/build/horizontal.css';
import '../../node_modules/react-animated-slider/build/horizontal.css';


class AutoPlay extends Component {
	state = {
		content: [
			{
				title: 'Have a meet with KIMC',
				description:
				'Do you have tax or management concerns, We at KIMC provide the best service in the industry. We have excellent staffs who pay attention to the little details.',
				button: 'Discover',
				image: 'http://www.masteracct.com/assets/img/sliders/2.jpg'
			},
			{
				title: 'Reach your potential faster and with ease.',
				description:
				'Our focus on excellence has led to many accolades',
				button: 'Discover',
				image: 'http://www.masteracct.com/assets/img/sliders/5.jpg',
			},
			{
				title: 'We truly listen.',
				description:
				'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
				button: 'Discover',
				image: 'http://www.masteracct.com/assets/img/sliders/Slider_Payroll_Services.jpg'
			}
		]
	}

	render(){
		const settings = {
			infinite: true,
			autoplay: 2000,
			duration: 2000
		}
		return (
			<div className="track slider-wrapper slider">
				<Slider className="center previousButton nextButton next animateIn animateOut" {...settings}>
					{this.state.content.map((item, index) => (
						<div
							key={index}
							className="slider-content"
							style={{ background: `url('${item.image}') no-repeat center center` }}
						>
							<div className="contents slide inner">
								<h1>{item.title}</h1>
								<div className="sliderContent">
									<p>{item.description}</p>
									<Link to='/services'><button className="btn-large red darken-3 pulse">{item.button}</button></Link>									
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		)		
	}
}

export default AutoPlay;
// contact@hostlink.com