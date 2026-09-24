export const getWeatherInfo = (code: number) => {
  if (code === 0) {
    return {
      icon: '☀️',
      text: '맑음',
    }
  }

  if (code === 1 || code === 2) {
    return {
      icon: '🌤️',
      text: '구름 조금',
    }
  }

  if (code === 3) {
    return {
      icon: '☁️',
      text: '흐림',
    }
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return {
      icon: '🌧️',
      text: '이슬비',
    }
  }

  if ([61, 63, 65, 66, 67].includes(code)) {
    return {
      icon: '🌧️',
      text: '비',
    }
  }

  if ([71, 73, 75, 77].includes(code)) {
    return {
      icon: '❄️',
      text: '눈',
    }
  }

  if ([80, 81, 82].includes(code)) {
    return {
      icon: '🌦️',
      text: '소나기',
    }
  }

  if ([95, 96, 99].includes(code)) {
    return {
      icon: '⛈️',
      text: '뇌우',
    }
  }

  return {
    icon: '🌥️',
    text: '알 수 없음',
  }
}