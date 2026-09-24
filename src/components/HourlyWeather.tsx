import './css/HourlyWeather.css'

import { getWeatherInfo } from '../utils/weather'

interface HourlyWeatherProps {
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
  }
}

function HourlyWeather({ hourly }: HourlyWeatherProps) {
    const date = hourly.time[0]

  return (
    <section className='hour-section'>
      <p className='title'>시간별 날씨 <br/>
      <span className='date'>{date.slice(0, 4)}년 {date.slice(5, 7)}월 {date.slice(8, 10)}일</span></p>
        <div className='time-box'>
            <ul>

                {hourly.time.slice(0, 12).map((time, index) => {
                const weatherInfo = getWeatherInfo(hourly.weather_code[index])

                return (
                    <li key={time}>
                    <span className='time'>{time.slice(11, 13)}시</span>
                    <span className='icon'>{weatherInfo.icon}</span>
                    <span className='tem'>{hourly.temperature_2m[index]}°C</span>
                    </li>
                )
                })}
            
            </ul>
        </div>
    </section>
  )
  
}
export default HourlyWeather
