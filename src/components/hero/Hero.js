import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <section className='hero' id='home'>
      <article className='heroText'>
        <h2>COVID-19 LIVE TRACKER</h2>
        <p>
          The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
          in December 2019, the outbreak was later recognized as a pandemic by
          the World Health Organization (WHO) on 11 March 2020.
        </p>
        <div className='heroButton'>
          <button>
            How to Protect
            <span>
              <img src='assets/icon.png' alt='button icon' />
            </span>
          </button>
          <button>
            FIND A DOCTOR
            <span>
              <img src='assets/icon.png' alt='button icon' />
            </span>
          </button>
        </div>
      </article>
      <figure className='heroIcon'>
        <img src='assets/emo.png' alt='heroIcon' />
      </figure>
    </section>
  )
}

export default Hero
