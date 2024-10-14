import { defineComponent, toRef, computed } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherUIConditions',

  props: {
    temperature: { type: Number, default: 0 },
    iconId: { type: Number, default: 0 },
    title: { type: String, default: '' },
  },

  setup(props) {
    const tempInC = computed(() => getTempInCelc(props.temperature))
    const icon = computed(() => WeatherConditionIcons[props.iconId])
    const titleTpl = toRef(props.title)

    function getTempInCelc(kelvin) {
      const celc = kelvin - 273.15
      return celc.toFixed(1)
    }

    return {
      //   getTempInCelc,
      tempInC,
      icon,
      titleTpl,
    }
  },

  template: `
        <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="titleTpl"> {{icon}}</div>
            <div class="weather-conditions__temp">{{tempInC}} °C</div>
        </div>
  
  `,
})
