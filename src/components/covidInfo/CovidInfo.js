import React, { useState, useEffect } from 'react'
import './covidInfo.scss'
import LiveData from './liveData/LiveData'
import Countries from './data/countries/Countries'
import MapData from './data/mapData/MapData'
import { Grid } from '@material-ui/core'
import { fetchCountries } from '../../api'
import MapDataControl from './data/mapDataControl/MapDataControl'
const CovidInfo = ({ data, handleCountrySelect, mapCenter, mapZoom }) => {
  const [countriesName, setCountriesName] = useState([])
  const [casesType, setCasesType] = useState('cases')

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountriesName(await fetchCountries())
    }
    fetchCountriesAPI()
  }, [setCountriesName])

  return (
    <section className='covidInfo' id='updates'>
      <div className='covidInfo__top'>
        <LiveData
          countriesName={countriesName}
          setCountriesName={setCountriesName}
          handleCountrySelect={handleCountrySelect}
          data={data}
        />
      </div>
      <div className='covidInfo__bottom'>
        <Grid container className='mapCountries'>
          <Grid xs={11} md={7}>
            <MapDataControl casesType={casesType} setCasesType={setCasesType} />
            <MapData
              casesType={casesType}
              countriesName={countriesName}
              center={mapCenter}
              zoom={mapZoom}
            />
          </Grid>
          <Grid xs={11} md={3}>
            <Countries />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default CovidInfo
