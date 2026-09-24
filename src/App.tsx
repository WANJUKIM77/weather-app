import { useEffect, useState } from 'react'
import CurrentWeather from './components/CurrentWeather'


import './App.css'


interface WeatherData {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
  }

  current_units: {
    temperature_2m: string
    wind_speed_10m: string
  }

  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
  }
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast' +
          '?latitude=37.5665' +
          '&longitude=126.9780' +
          '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code' +
          '&hourly=temperature_2m,weather_code' +
          '&timezone=Asia/Seoul'
        )

        if (!response.ok) {
          throw new Error('날씨 정보를 가져오지 못했습니다.')
        }

        const data: WeatherData = await response.json()

        setWeather(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return <div className='loading'>날씨 정보를 불러오는 중...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!weather) {
    return null
  }

  return (
    <main>
      <CurrentWeather
        current={weather.current}
        units={weather.current_units}
        hourly={weather.hourly}
      />
    </main>
  )
}

export default App