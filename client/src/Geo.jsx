import React from "react";
import { Marker } from "react-map-gl";
import UserLoc from './Markers/User'
import { geolocated, geoPropTypes } from "react-geolocated";

class User extends React.Component {
    
    render() {
        return (
            <div>
                {!this.props.isGeolocationAvailable ? (
                    <div>Your browser does not support Geolocation.</div>
                ) : !this.props.isGeolocationEnabled ? (
                    <div>Geolocation is not enabled.</div>
                ) : this.props.coords ? (
                    <Marker longitude={this.props.coords.longitude} latitude={this.props.coords.latitude}>
                    <UserLoc />
                    </Marker>
                ) : (
                    <div>Getting the location data&hellip;</div>
                )}
            </div>
        );
    }
}

User.propTypes = Object.assign({}, User.propTypes, geoPropTypes);



export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(User);