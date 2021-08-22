import React from 'react'
import {
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { blog } from '../../data'
import arrowRight from '../../srcAssets/arrow-right.png'
import './blog.scss'
const Blog = () => {
  return (
    <div className='blog' id='blog'>
      <Typography variant='h4' className='blog__heading'>
        Blog topics
      </Typography>
      <Grid container className='articles'>
        {blog.map((article) => (
          <Grid
            key={article.id}
            xs={9}
            sm={9}
            md={3}
            item
            component={Card}
            className='articlesInfo'>
            <CardMedia
              image={article.image}
              className='articlesInfo__image'
              title={article.heading}
            />
            <CardContent className='articles__cardContent'>
              <Typography
                className='articles__cardContent__heading'
                variant='body1'>
                {article.heading}
              </Typography>
              <Typography
                className='articles__cardContent__text'
                variant='body2'>
                {article.info}
              </Typography>
            </CardContent>
            <CardActions className='articles__cardActions'>
              <Typography
                color='textSecondary'
                className='time'
                variant='body2'>
                {article.time}
              </Typography>
              <Typography className='readMore' variant='body2'>
                read more
              </Typography>
            </CardActions>
          </Grid>
        ))}
      </Grid>
      <Button className='viewAll' variant='contained'>
        <Typography className='viewAll__text' variant='body1'>
          View all
        </Typography>
        <img src={arrowRight} alt='View all' />
      </Button>
    </div>
  )
}

export default Blog
