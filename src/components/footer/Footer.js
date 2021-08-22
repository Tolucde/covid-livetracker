import React from 'react'
import { Typography } from '@material-ui/core'
import facebook from '../../srcAssets/facebook.png'
import instagram from '../../srcAssets/instagram.png'
import youtube from '../../srcAssets/youtube.png'
import './footer.scss'
const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='footerSection'>
        <div className='attributionLogo'>
          <div className='footerLogo'>
            <img src='assets/Logo.png' alt='logo' />
            <div className='footerLogo__text'>COVID-19</div>
          </div>
          <Typography variant='subtitle2' className='attributionInfo'>
            DesignMamba an online marketplace built to cope with promising
            future
          </Typography>
        </div>
        <div className='usefulLinks'>
          <Typography variant='subtitle2' className='usefulLinks__heading'>
            USEFUL LINKS
          </Typography>
          <div className='lists'>
            <ul className='list1'>
              <li>Why</li>
              <li>About</li>
              <li>Carrers</li>
              <li>Blog</li>
            </ul>
            <ul className='list2'>
              <li>Contract</li>
              <li>T&C</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className='contactLocation'>
          <div className='contact'>
            <Typography variant='subtitle1' className='contact__heading'>
              CONTACT US
            </Typography>
            <div>
              <div className='tel'>Tel: +8801765668561</div>
              <div className='email'>support@designmamba.com</div>
            </div>
          </div>
          <div className='location'>
            <Typography variant='subtitle1' className='location__heading'>
              LOCATION
            </Typography>
            <div>
              <div className='location__text'>Lalmatia, Dhaka-1207</div>
            </div>
          </div>
        </div>
        <div className='socials'>
          <Typography variant='subtitle1' className='socials__heading'>
            KEEP IN TOUCH
          </Typography>
          <div className='socialsIcon'>
            <div className='socialsIcon__div'>
              <img className='facebook' src={facebook} alt='facebook' />
            </div>
            <div className='socialsIcon__div'>
              <img className='youtube' src={youtube} alt='youtube' />
            </div>
            <div className='socialsIcon__div'>
              <img className='instagram' src={instagram} alt='instagram' />
            </div>
          </div>
        </div>
      </div>
      <div className='footerBottom'>
        <Typography className='footerBottom__text' variant='subtitle1'>
          © designmamba, All Rights Reserved
        </Typography>
      </div>
    </footer>
  )
}
export default Footer
