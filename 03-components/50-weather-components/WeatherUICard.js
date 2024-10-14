import { defineComponent, toRef } from 'vue'
import WeatherUIAlert from './WeatherUIAlert.js'
import WeatherUIConditions from './WeatherUIConditions.js'
import WeatherUIDetails from './WeatherUIDetails.js'
import WeatherUICardTitle from './WeatherUICardTitle.js'
export default defineComponent({
  name: 'WeatherUICard',

  components: {
    WeatherUIAlert,
    WeatherUIConditions,
    WeatherUIDetails,
    WeatherUICardTitle,
  },

  props: {
    weatherItemData: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const item = toRef(props.weatherItemData)
    function isDay(localTime, sunRise, sunSet) {
      return sunRise < localTime && sunSet > localTime
    }

    return {
      item,
      isDay,
    }
  },

  template: `
        <li 
        class="weather-card"
        :class="{'weather-card--night': isDay(item.current.dt, item.current.sunrise, item.current.sunset) == false}">
          <WeatherUIAlert v-if="item.alert !== null" :sender="item.alert.sender_name" :description="item.alert.description"/>
          <WeatherUICardTitle :place="item.geographic_name" :time="item.current.dt" />
          <WeatherUIConditions :temperature="item.current.temp" :iconId="item.current.weather.id"
               :title="item.current.weather.description"/>
          <WeatherUIDetails :pressure="item.current.pressure" :humidity="item.current.humidity"
                :clouds="item.current.clouds"  :wind_speed="item.current.wind_speed"/>
        </li>
    `,
})
