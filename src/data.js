import shake from './srcAssets/shake.png'
import sneeze from './srcAssets/sneeze.png'
import cough from './srcAssets/cough.png'
import fever from './srcAssets/fever.png'
import soreThroat from './srcAssets/sore-throat.png'
import stayHome from './srcAssets/stay-home.png'
import touchFace from './srcAssets/touch-face.png'
import washHands from './srcAssets/wash-hands.png'
import stayHomeBanner from './srcAssets/stayHome.jpeg'
import sanitize from './srcAssets/sanitize.jpeg'
import wearMasks from './srcAssets/wearMasks.jpeg'
import close from './srcAssets/close.png'
import open from './srcAssets/open.png'

export const spread = [
  {
    id: 1,
    image: shake,
    heading: 'Person-to-person spread',
    info:
      'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.',
  },
  {
    id: 2,
    image: sneeze,
    heading: 'Person coughes or sneezes',
    info:
      'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.',
  },
  {
    id: 3,
    image: cough,
    heading: 'Sore Throat',
    info:
      'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.',
  },
]

export const symptoms = [
  {
    id: 1,
    image: fever,
    heading: 'Fever',
    info:
      'High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.',
  },
  {
    id: 2,
    image: cough,
    heading: 'Dry cough',
    info:
      'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).',
  },
  {
    id: 3,
    image: soreThroat,
    heading: 'Sore Throat',
    info:
      'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.',
  },
]

export const prevent = [
  {
    id: 1,
    image: washHands,
    heading: 'Wash your hands regularly with soap',
    info:
      'Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.',
  },
  {
    id: 2,
    image: stayHome,
    heading: 'Stay home if you feel unwell.',
    info:
      'Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care. ',
  },
  {
    id: 3,
    image: touchFace,
    heading: 'Avoid touching your face.',
    info:
      'To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face.',
  },
  {
    id: 4,
    image: sneeze,
    heading: 'Cover your mouth and nose',
    info:
      "Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your.",
  },
]

export const blog = [
  {
    id: 1,
    image: wearMasks,
    heading: 'Wearing face mask well',
    info:
      'If you wear a mask, then you must know how to use it and dispose of it properly.…',
    time: '10 Mar 2020',
  },
  {
    id: 2,
    image: sanitize,
    heading: 'Cleaning with sanitizer',
    info:
      'Washing your hands can protect you and your family. Also, alcohol-based hand…',
    time: '21 Oct 2020',
  },
  {
    id: 3,
    image: stayHomeBanner,
    heading: 'Stay home',
    info:
      'Stay home. Save lives.​. As COVID-19 continues to impact communities around…',
    time: '15 May 2020',
  },
]

export const sidebar = [
  { id: 1, link: '#home', text: 'Home' },
  { id: 2, link: '#update', text: 'Covid-19 Updates' },
  { id: 3, link: '#aboutCovid', text: 'About Covid-19' },
  { id: 4, link: '#faq', text: 'FAQ' },
  { id: 5, link: '#blog', text: 'Blog' },
  { id: 6, link: '#contact', text: 'Contact Us' },
]
export const covidFaq = [
  {
    id: 1,
    questions: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    answers:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aperiam fugiat aut tenetur excepturi ipsam quo numquam iusto, eius non!',
    open: open,
    close: close,
  },
  {
    id: 2,
    questions: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    answers:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aperiam fugiat aut tenetur excepturi ipsam quo numquam iusto, eius non!',
    open: open,
    close: close,
  },
  {
    id: 3,
    questions: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    answers:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aperiam fugiat aut tenetur excepturi ipsam quo numquam iusto, eius non!',
    open: open,
    close: close,
  },
  {
    id: 4,
    questions: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    answers:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aperiam fugiat aut tenetur excepturi ipsam quo numquam iusto, eius non!',
    open: open,
    close: close,
  },
]
