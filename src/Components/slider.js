import React, { Component } from "react";
import Slider from 'react-animated-slider'; 
import '../../node_modules/react-animated-slider/build/horizontal.css';
import '../../node_modules/react-animated-slider/build/horizontal.css';


class AutoPlay extends Component {
	state = {
		content: [
			{
				title: 'Vulputate Mollis',
				description:
				'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
				button: 'Read More',
				image: 'http://www.masteracct.com/assets/img/sliders/2.jpg'
			},
			{
				title: 'Tortor Dapibus',
				description:
				'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
				button: 'Discover',
				image: 'http://www.masteracct.com/assets/img/sliders/5.jpg',
			},
			{
				title: 'Phasellus volutpat metus',
				description:
				'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
				button: 'Buy now',
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
									<button className="btn-large red darken-3">{item.button}</button>									
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