import React from 'react';
import Axios from 'axios';
import FurWeather from './Components/FurWeather';
import CurWeather from './Components/CurWeather';
import './weather.scss'



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      city: "SYDNEY",
      lat: -33.865143,
      lon: 151.209900,
      weather: "",
      temp: "",
      humidity: "",
      wind_speed: "",
      daily: []
    }

  }


  updateWeather = async (data) => {

    await this.setState({
      weather: data.current.weather[0].main,
      temp: (data.current.temp - 273).toFixed(2),
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
    })

  }

  updateDays = async (data) => {

    await this.setState({
      daily: data.daily
    })

  }

  handleClick = async () => {

    if (this.state.city === "SYDNEY") {

      await this.setState({
        city: "BEIJING",
        lat: 39.916668,
        lon: 116.383331
      })

      await this.componentDidMount()

    } else {

      await this.setState({
        city: "SYDNEY",
        lat: -33.865143,
        lon: 151.209900
      })

      await this.componentDidMount()

    }
  }

  async componentDidMount() {

    setInterval(async () => {
      let url = `http://localhost:5000/${this.state.city.toLowerCase()}`;
      const res = await Axios(url)

      this.updateWeather(res.data.data)
      this.updateDays(res.data.data)

    }, 5 * 1000)

  }

  render() {

    const { city, lat, lon, weather, temp, humidity, wind_speed } = this.state;

    return (
      <div className="wea_app_wrapper">
        <CurWeather
          cityName={city}
          cityLat={lat}
          cityLon={lon}
          cityWeather={weather}
          cityTemp={temp}
          cityHumid={humidity}
          cityWSpeed={wind_speed}
          onClick={this.handleClick}
        />
        <FurWeather
          cityName={city}
          cityLat={lat}
          cityLon={lon}
        />
      </div>
    )

  }

}

export default App;
