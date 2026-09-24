import './css/CurrentWeather.css'

import { getWeatherInfo } from '../utils/weather'
import HourlyWeather from './HourlyWeather'

interface CurrentWeatherProps {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
  }
  units: {
    temperature_2m: string
    wind_speed_10m: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
  }
}

function CurrentWeather({ current, units, hourly }: CurrentWeatherProps) {
  const weatherInfo = getWeatherInfo(current.weather_code)

  return (
    <section className='current-card'>
      <div className='current-section'>

        <div className='weather-icon'>
          {weatherInfo.icon}
        </div>

        <p className='tem-num'>
          {current.temperature_2m}{units.temperature_2m}
        </p>
        <p className='tem-text'>
          {weatherInfo.text}
        </p>
        <div className='weather-section'>
          <div className='flex'>
            <p>
              <svg
              className="weather-detail__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3C9 7 6 10.5 6 14a6 6 0 0 0 12 0c0-3.5-3-7-6-11z" />
            </svg>
            습도
            </p> <span>{current.relative_humidity_2m}%</span>
          </div>
          <div className='flex'>
            <p>
              <svg
                className="weather-detail__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 8h11c2 0 2-3 0-3-1 0-1.5.5-2 1" />
                <path d="M3 12h15c2 0 2-3 0-3-1 0-1.5.5-2 1" />
                <path d="M3 16h8c2 0 2 3 0 3-1 0-1.5-.5-2-1" />
              </svg>
              풍속
            </p> <span>{current.wind_speed_10m}
            {units.wind_speed_10m}</span>
          </div>
        </div>
      </div>
      <div className='hourly-weather'>
        <HourlyWeather hourly={hourly}/>
      </div>
    </section>
  )
}

export default CurrentWeather