import React from "react";
import { Marker } from "react-map-gl";
import UserLoc from './User'
import { geolocated, geoPropTypes } from "react-geolocated";

class Demo extends React.Component {
    render() {
        const { props } = this;
        return (

            <div
                style={{
                    visibility: "visible"
                }}
            >
                {!props.isGeolocationAvailable ? (
                    <div>Your browser does not support Geolocation.</div>
                ) : !props.isGeolocationEnabled ? (
                    <div>Geolocation is not enabled.</div>
                ) : props.coords ? (
                    <Marker  longitude={props.coords.longitude} latitude={props.coords.latitude} >
                    <UserLoc />
                    </Marker>
                ) : (
                    <div>Getting the location data&hellip;</div>
                )}
            </div>
        );
    }
}

Demo.propTypes = { ...Demo.propTypes, ...geoPropTypes };

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);