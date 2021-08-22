import axios from 'axios'
const url = 'https://disease.sh/v3/covid-19'
const countriesURL = 'https://disease.sh/v3/covid-19/countries'

export const countriesArray = [
  'USA',
  'Spain',
  'Italy',
  'Germany',
  'China',
  'France',
  'Iran',
  'United Kingdom',
]
export const fetchGlobal = async (country) => {
  let changeableURL = url
  if (country) {
    changeableURL = `${url}/countries/${country}`
  } else {
    changeableURL = `${url}/all`
  }

  try {
    const {
      data: { cases, recovered, deaths, countryInfo },
    } = await axios.get(changeableURL)
    return {
      cases: cases,
      recovered: recovered,
      deaths: deaths,
      countryInfo: countryInfo,
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportedDate,
    }))
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchSelectedCountries = async () => {
  try {
    var countries = []

    for (let i = 0; i < countriesArray.length; i++) {
      const {
        data: { cases, countryInfo },
      } = await axios.get(`${countriesURL}/${countriesArray[i]}`)
      countries.push({ name: countriesArray[i], cases, countryInfo })
    }
    return countries
  } catch (error) {
    console.log(error)
  }
}
