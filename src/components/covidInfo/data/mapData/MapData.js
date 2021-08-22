import React from 'react'
import { Card } from '@material-ui/core'
import './Map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from '../../../../util'
// import {  } from 'leaflet'
const MapData = ({ countriesName, casesType, center, zoom }) => {
  return (
    <Card className='mapData'>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright"> OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countriesName, casesType)}
      </MapContainer>
    </Card>
  )
}
export default MapData
