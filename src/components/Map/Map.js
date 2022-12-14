import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map({ zoomLevel }) {
    return (
        <div className="map">
            <h2 className="map-h2">Placeholder Text Above Map</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAznFkK1WKv-jflfuXaEZYkUAvNS7xibpc'}}
                    defaultZoom={zoomLevel}
                >
                </GoogleMapReact>
            </div>
        </div>
    )
};