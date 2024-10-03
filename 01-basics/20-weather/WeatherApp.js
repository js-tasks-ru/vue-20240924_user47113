import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherData = getWeatherData()

    function isDay(localTime, sunRise, sunSet) {
      return sunRise < localTime && sunSet > localTime
    }

    function getTempInCelc(kelvin) {
      const celc = kelvin - 273.15
      return celc.toFixed(1)
    }

    function getPressureInmmHg(hPa) {
      const mmHg = hPa * 0.75
      return mmHg.toFixed(0)
    }

    return {
      weatherData,
      WeatherConditionIcons,
      getTempInCelc,
      getPressureInmmHg,
      isDay,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list" v-for="item in weatherData">
        <li 
        class="weather-card"
        :class="{'weather-card--night': isDay(item.current.dt, item.current.sunrise, item.current.sunset) == false}">
          <div class="weather-alert"
          v-if="item.alert !== null">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ item.alert.sender_name }}: {{ item.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description"> {{WeatherConditionIcons[item.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{getTempInCelc(item.current.temp)}} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{getPressureInmmHg(item.current.pressure)}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{item.current.humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{item.current.clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{item.current.wind_speed}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
