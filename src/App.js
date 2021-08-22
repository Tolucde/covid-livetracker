import React from 'react'
import Topbar from './components/topbar/Topbar'
import Hero from './components/hero/Hero'
import CovidInfo from './components/covidInfo/CovidInfo'
import CovidEducate from './components/covidEducate/CovidEducate'
import 'leaflet/dist/leaflet.css'
import { fetchGlobal } from './api'
import Faq from './components/faq/Faq'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'

class App extends React.Component {
  state = {
    data: {},
    country: '',
    mapCenter: { lat: 10, lng: 8 },
    mapZoom: 3,
  }
  async componentDidMount() {
    const fetchedData = await fetchGlobal()
    this.setState({ data: fetchedData })
  }

  handleCountrySelect = async (country) => {
    const data = await fetchGlobal(country)
    this.setState({
      data: data,
      country: country,
      mapCenter: { lat: data.countryInfo.lat, lng: data.countryInfo.long },
      mapZoom: 3,
    })
  }
  render() {
    const { data, country, mapCenter, mapZoom } = this.state
    return (
      <>
        <Topbar />
        <Hero />
        <CovidInfo
          handleCountrySelect={this.handleCountrySelect}
          data={data}
          country={country}
          mapCenter={mapCenter}
          mapZoom={mapZoom}
        />
        <CovidEducate />
        <Faq />
        <Blog />
        <Footer />
      </>
    )
  }
}

export default App
