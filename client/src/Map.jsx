import React, {Component} from 'react';
import MapGL, {NavigationControl, Marker } from 'react-map-gl';
import CityPin from './Placement'
import 'mapbox-gl/dist/mapbox-gl.css';
import Demo from './Geo';
const TOKEN = 'pk.eyJ1Ijoicm9iZXJ0c2FsZ3Vlcm8iLCJhIjoiY2pscXdvb2VlMmtwejNrb3M0bWhiM3BuMiJ9.frRFzb3JU0elVwU8lCC0SA';
const PLACEMENT = 'https://data.cityofnewyork.us/resource/bdha-6eqy.json'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      placements: [],
      viewport: {
        latitude: 40.7410986,
        longitude: -73.997623,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    };
    this.getInnerRef = this.getInnerRef.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  innerRef;
      
  getInnerRef(ref) {
      this.innerRef = ref;
  }

  getLocation() {
      this.innerRef && this.innerRef.getLocation();
  }



  componentDidMount() {
    fetch(PLACEMENT)
    .then(response => response.json())
    .then(placements => {
      console.log(placements)
      this.setState({
        placements: placements,
        latitude: this.props.latitude
      });
    });
  }

  _renderPlacement(placement, i) {
    const lat = placement.the_geom.coordinates[1];
    const lng = placement.the_geom.coordinates[0];

    return (
      <Marker key={i} longitude={lng} latitude={lat} >
        <CityPin />
      </Marker>
    );
  }






render() {
  const placements = this.state.placements;
return (

      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/robertsalguero/cjls64avr16h12sqt6l95jmi4"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
       <NavigationControl />
        </div>
        { placements.map(this._renderPlacement) }
        <Demo class="loc" onError={error => console.log(error)} ref={this.getInnerRef} />
      </MapGL>
    );
  }
}

export default Map;
