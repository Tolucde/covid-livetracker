import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'
const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 300,
  },
  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 600,
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 1200,
  },
}
export const showDataOnMap = (data, casesType = 'cases') =>
  data.map((country) => (
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }>
      <Popup>
        <div className='info__Container'>
          <div
            className='info__flag'
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}></div>
          <div className='info__name'>{country.country}</div>
          <div className='info__cases'>
            Cases:{numeral(country.cases).format('0,0')}
          </div>
          <div className='info__recovered'>
            Recovered:{numeral(country.recovered).format('0,0')}
          </div>
          <div className='info__deaths'>
            Deaths:{numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </Popup>
    </Circle>
  ))
