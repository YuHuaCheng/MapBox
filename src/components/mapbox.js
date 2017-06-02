import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoieWNoZW5nIiwiYSI6ImNqM2c4dWJmdzAwMWQydnFqbWZyZGl5N3cifQ.VNaMaLoRYsK1zfUhjYffxA';

class MapBox extends Component {
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.refs.map,
            style: 'mapbox://styles/mapbox/dark-v9'
        });
    }

    render() {
        return (
            <div className="map_container" ref="map">
                <h3>I'm MapBox</h3>
            </div>
        )
    }
}

export default MapBox