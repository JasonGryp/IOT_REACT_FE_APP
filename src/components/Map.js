import React from 'react'

import { Wrapper, Status, Spinner, ErrorComponent } from '@googlemaps/react-wrapper'
import MapComponent from './MapComponent'

const Map = ({ center, zoom }) => {
    
    return (
        <MapComponent center={center} zoom={zoom} />
        
    )
}

export default Map
