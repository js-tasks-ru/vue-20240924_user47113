import { defineComponent, toRef, computed } from 'vue'
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

    const humidityTpl = toRef(() => props.humidity)
    const cloudsTpl = toRef(() => props.clouds)
    const windSpeedTpl = toRef(() => props.wind_speed)
    const pressureInmmHg = computed(() => getPressureInmmHg(props.pressure))
    return {
      pressureInmmHg,
      humidityTpl,
      cloudsTpl,
      windSpeedTpl,
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
              <div class="weather-details__item-value">{{humidityTpl}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{cloudsTpl}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{windSpeedTpl}}</div>
            </div>
          </div>
    
    `,
})
