import React from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import './mapDataControl.scss'
const MapDataControl = ({ casesType, setCasesType }) => {
  return (
    <Grid container className='mapDataControl'>
      <Grid
        className='mapDataControl__card'
        item
        component={Card}
        onClick={(e) => setCasesType('cases')}>
        <Typography variant='h6' className='mapDataControl__text'>
          Cases
        </Typography>
      </Grid>
      <Grid
        className='mapDataControl__card'
        item
        component={Card}
        onClick={(e) => setCasesType('recovered')}>
        <Typography variant='h6' className='mapDataControl__text'>
          Recovered
        </Typography>
      </Grid>
      <Grid
        className='mapDataControl__card'
        item
        component={Card}
        onClick={(e) => setCasesType('deaths')}>
        <Typography variant='h6' className='mapDataControl__text'>
          Deaths
        </Typography>
      </Grid>
    </Grid>
  )
}

export default MapDataControl
