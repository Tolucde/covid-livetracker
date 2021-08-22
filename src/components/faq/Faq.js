import React from 'react'
import './faq.scss'
import navRight from '../../srcAssets/navRight.png'

import SingleQuestion from './SingleQuestion'
import { covidFaq } from '../../data'

const Faq = () => {
  return (
    <section className='faq' id='faq'>
      <h2 className='faq__heading'>FAQ</h2>
      <section className='faq__container'>
        <article className='faq__list'>
          <div className='faq__list__items'>
            <div>COVID-19</div>
            <img src={navRight} alt='navRight' />
          </div>
          <div className='faq__list__items'>
            <div>How it Spreads</div>
            <img src={navRight} alt='navRight' />
          </div>
          <div className='faq__list__items'>
            <div>How to Protect Yourself</div>
            <img src={navRight} alt='navRight' />
          </div>
          <div className='faq__list__items'>
            <div>Symptoms and Testing</div>
            <img src={navRight} alt='navRight' />
          </div>
          <div className='faq__list__items'>
            <div>Community</div>
            <img src={navRight} alt='navRight' />
          </div>
        </article>

        <article className='faq__right'>
          {covidFaq.map((faq) => {
            return <SingleQuestion key={faq.id} {...faq} />
          })}
        </article>
      </section>
    </section>
  )
}

export default Faq
