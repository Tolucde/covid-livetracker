import React from 'react'
import './countries.scss'
import { Card } from '@material-ui/core'
import SelectedCountries from './SelectedCountries'
const Countries = () => {
  return (
    <Card className='countries'>
      <div className='global'>
        <div className='global__name'>Global</div>
        <div className='global__figures'>1,245,347 </div>
      </div>
      <SelectedCountries />
    </Card>
  )
}

export default Countries
// onSubmit = { mapCountryChange }
