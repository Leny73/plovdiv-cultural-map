import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Site from './site.js';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.js';

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
                ></Site>
            })}
          </div> 
        </div> 
        <div className="map"> 
        <GoogleMapReact
          center={center}
          zoom={14}
        >
          {this.state.sites.map((stadium) => {
            return <Marker
              key={stadium.name}
              lat={stadium.lat}
              lng={stadium.lng}
              text={stadium.capacity}
           ></Marker>
          })}
        </GoogleMapReact>
        </div> 
      </div>
    );
  }
}

export default App;
