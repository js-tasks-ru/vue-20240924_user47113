import { defineComponent, toRef } from 'vue'

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
    const placeTpl = toRef(() => props.place)
    const timeTpl = toRef(() => props.time)

    return {
      placeTpl,
      timeTpl,
    }
  },

  template: `
          <div>
            <h2 class="weather-card__name">
              {{ placeTpl }}
            </h2>
            <div class="weather-card__time">
              {{ timeTpl }}
            </div>
          </div>
    `,
})
