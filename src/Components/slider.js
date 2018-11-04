import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider'; 
import '../../node_modules/react-animated-slider/build/horizontal.css';
import '../../node_modules/react-animated-slider/build/horizontal.css';


class AutoPlay extends Component {
	state = {
		content: [
			{
				title: 'Have a meet with Us!',
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
				'We are committed to building a stable and leading firm through the dedication of our highly qualified staff, responsive, innovative and well motivated employees who seek continuous improvement in team work and timely delivery of total quality service to our clientele.',
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
								<h1 className='itemTitle'>{item.title}</h1>
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