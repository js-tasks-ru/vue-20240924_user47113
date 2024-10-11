import { defineComponent } from 'vue'
export default defineComponent({
  name: 'WeatherUIDetails',

  props: {
    pressure: { type: Number, default: 0 },
    humidity: { type: Number, default: 0 },
    clouds: { type: Number, default: 0 },
    wind_speed: { type: Number, default: 0 },
  },

  setup(props) {
    function getPressureInmmHg(hPa) {
      const mmHg = hPa * 0.75
      return mmHg.toFixed(0)
    }

    const humidity = props.humidity
    const clouds = props.clouds
    const wind_speed = props.wind_speed
    const pressureInmmHg = getPressureInmmHg(props.pressure)
    return {
      pressureInmmHg,
      humidity,
      clouds,
      wind_speed,
    }
  },

  template: `
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{pressureInmmHg}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{wind_speed}}</div>
            </div>
          </div>
    
    `,
})
