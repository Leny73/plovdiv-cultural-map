import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import Site from './site.js';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js';
import site from './site.js';

let center = {
  lat:42.151236,
  lng:24.752182
 }

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        sites:[],
        allSites:[],
        selectedSite: null,
        search: ''
    }
 }

 handleclick = ()=>{
  this.props.handleClick(this.props.site)
};

selectSite = (site)=>{
  this.setState({
      selectedSite:site
  })
  if (this.state.selectedSite){
    center={
        lat: this.state.selectedSite.lat,
        lng: this.state.selectedSite.lng
    }
  }
};
 
 componentDidMount(){
    this.setState({
        sites: data,
        allSitess: data
    })
 }
 


 
  render() {
    return (
      <div className="App">
        <div className="main"> 
          <div className="search"> 
          </div> 
          <div className="sites">
            {this.state.sites.map((site) => {
              return <Site
                key = {site.name}
                site = {site}
                handleClick={this.selectSite}
                ></Site>
            })}
          </div> 
        </div> 
        <div className="map"> 
        <GoogleMapReact
          center={center}
          zoom={14}
        >
          {this.state.sites.map((site) => {
            return <Marker
              key={site.name}
              lat={site.lat}
              lng={site.lng}
              text={site.capacity}
              selected={site === this.state.selectedSite}
           ></Marker>
          })}
        </GoogleMapReact>
        </div> 
      </div>
    );
  }
}

export default App;
