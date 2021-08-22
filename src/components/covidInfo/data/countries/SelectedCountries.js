import React, { useState, useEffect } from 'react'
import './selectedCountries.scss'
import CountUp from 'react-countup'
import { fetchSelectedCountries } from '../../../../api'

const SelectedCountries = () => {
  const [countriesArray, setCountriesArray] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesArray(await fetchSelectedCountries())
    }

    fetchAPI()
  }, [setCountriesArray])

  const displaySelectedCountries = countriesArray.length ? (
    <div className='selectedCountries'>
      {countriesArray.map((country) => (
        <div key={country.name} className='countryCard'>
          <img src={country.countryInfo.flag} alt={country.name} />
          <div className='country'>{country.name}</div>
          <div className='number'>
            <CountUp
              start={0}
              end={country.cases}
              duration={2.5}
              separator=','
            />
          </div>
        </div>
      ))}
    </div>
  ) : null

  return <div>{displaySelectedCountries}</div>
}

export default SelectedCountries
