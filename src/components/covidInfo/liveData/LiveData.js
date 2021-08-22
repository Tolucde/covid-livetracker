import React from 'react'
import './liveData.scss'
import CountUp from 'react-countup'
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import covidRed from '../../../srcAssets/covid-red.png'
import globe from '../../../srcAssets/globe.png'
import covidGreen from '../../../srcAssets/covid-green.png'
import covidBlue from '../../../srcAssets/covid-blue.png'

const LiveData = ({
  data: { recovered, deaths, cases },
  handleCountrySelect,
  countriesName,
}) => {
  const liveDataComp = cases ? (
    <Grid container className='liveData'>
      <Grid
        sm={6}
        xs={12}
        md={3}
        item
        component={Card}
        className='liveDataInfo overview'>
        <CardMedia
          className='liveDataInfo__media'
          image={globe}
          title='liveDataInfo__media'
        />
        <CardContent className='liveDataInfo__figures'>
          <Typography variant='body1' className='figures__headings'>
            Stats Overview
          </Typography>
          <div className='global'>
            <select
              className='liveData__select'
              onChange={(e) => handleCountrySelect(e.target.value)}>
              <option value='' className='figures__headings'>
                Global
              </option>
              {countriesName.map((countries) => (
                <option key={countries.country} value={countries.country}>
                  {countries.country}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
        item
        component={Card}
        className='liveDataInfo'>
        <CardMedia
          className='liveDataInfo__media'
          image={covidRed}
          title='liveDataInfo__media'
        />

        <CardContent className='liveDataInfo__figures'>
          <Typography variant='body1'>Total Coronavirus Cases</Typography>
          <Typography className='figures__headings' variant='h5'>
            <CountUp start={0} end={cases} duration={2.5} separator=',' />
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        md={3}
        sm={6}
        xs={12}
        item
        component={Card}
        className='liveDataInfo'>
        <CardMedia
          className='liveDataInfo__media'
          image={covidGreen}
          title='liveDataInfo__media'
        />
        <CardContent className='liveDataInfo__figures'>
          <Typography variant='body1'>Total Recovered</Typography>
          <Typography className='figures__headings' variant='h5'>
            <CountUp start={0} end={recovered} duration={2.5} separator=',' />
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        md={2}
        sm={6}
        xs={12}
        item
        component={Card}
        className='liveDataInfo'>
        <CardMedia
          className='liveDataInfo__media'
          image={covidBlue}
          title='liveDataInfo__media'
        />
        <CardContent className='liveDataInfo__figures'>
          <Typography variant='body1'>Total Deaths</Typography>
          <Typography className='figures__headings' variant='h5'>
            <CountUp start={0} end={deaths} duration={2.5} separator=',' />
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  ) : (
    <Typography variant='body1'>Loading...</Typography>
  )
  return <section className='liveDataComp'>{liveDataComp}</section>
}

export default LiveData
