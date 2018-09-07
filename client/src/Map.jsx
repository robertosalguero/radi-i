import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = 'pk.eyJ1Ijoicm9iZXJ0c2FsZ3Vlcm8iLCJhIjoiY2pscXdvb2VlMmtwejNrb3M0bWhiM3BuMiJ9.frRFzb3JU0elVwU8lCC0SA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -30.0009,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 1200,
        height: 900,
      }
    };
  }
render() {
return (
      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/robertsalguero/cjls64avr16h12sqt6l95jmi4"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
       <NavigationControl />
        </div>
      </MapGL>
    );
  }
}


