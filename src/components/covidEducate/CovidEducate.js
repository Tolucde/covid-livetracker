import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import { spread, symptoms, prevent } from '../../data'
import './covidEducate.scss'

const CovidEducate = () => {
  return (
    <section className='covidEducate' id='aboutCovid'>
      <Typography
        className='heading'
        style={{
          color: '#262C7C',
          textAlign: 'center',
        }}
        variant='h5'>
        How Corona Virus Spreads
      </Typography>

      <Grid container className='educateGrid'>
        {spread.map((item) => (
          <Grid
            key={item.id}
            xs={12}
            sm={3}
            item
            component={Card}
            className='card'>
            <CardMedia
              className='cardMedia'
              image={item.image}
              title={item.heading}
            />
            <CardContent className='cardContent'>
              <Typography className='heading' variant='h6' gutterBottom>
                {item.heading}
              </Typography>
              <Typography className='text' variant='body2'>
                {item.info}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
      <Typography
        className='heading'
        style={{
          color: '#262C7C',
          textAlign: 'center',
        }}
        variant='h5'>
        How Corona Virus Spreads
      </Typography>

      <Grid container className='educateGrid'>
        {symptoms.map((item) => (
          <Grid
            key={item.id}
            xs={12}
            sm={3}
            item
            component={Card}
            className='card'>
            <CardMedia className='cardMedia' image={item.image} title='shake' />
            <CardContent className='cardContent'>
              <Typography className='heading' variant='h6' gutterBottom>
                {item.heading}
              </Typography>
              <Typography className='text' variant='body2'>
                {item.info}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>

      <Typography
        className='heading'
        style={{
          color: '#262C7C',
          textAlign: 'center',
        }}
        variant='h5'>
        How to slow the spread
      </Typography>
      <Grid container className='educateGrid'>
        {prevent.map((item) => (
          <Grid
            key={item.id}
            xs={12}
            sm={4}
            md={2}
            item
            component={Card}
            className='card prevent'>
            <CardMedia
              className='cardMedia preventMedia'
              image={item.image}
              title='shake'
            />
            <CardContent className='cardContent'>
              <Typography className='heading' variant='h6' gutterBottom>
                {item.heading}
              </Typography>
              <Typography className='text' variant='body1'>
                {item.info}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default CovidEducate
