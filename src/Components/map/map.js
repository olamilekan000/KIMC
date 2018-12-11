import React, { Component } from 'react'
import MapTextComponent from './mapTextComponent'
import GoogleMapReact  from 'google-map-react';

class MyGoogleMap extends Component{

	static defaultProps = {
		center: {
		  lat: 6.58941424,
		  lng: 3.36127723
		},
		zoom: 20
	};
	render(){
		console.log(this.props)
		return (
	       <GoogleMapReact
	        defaultCenter={this.props.center}
	        defaultZoom={this.props.zoom}
	      >
	        <MapTextComponent 
	            lat={6.58941424}
	            lng={3.36127730}	        
	          	text={'bus-stop'} 
	        />
	      </GoogleMapReact>

		)
	}
}

export default MyGoogleMap
