import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherUICardTitle',

  props: {
    place: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const place = props.place
    const time = props.time

    return {
      place,
      time,
    }
  },

  template: `
          <div>
            <h2 class="weather-card__name">
              {{ place }}
            </h2>
            <div class="weather-card__time">
              {{ time }}
            </div>
          </div>
    `,
})
