import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherUIAlert',

  props: {
    sender: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const sender = props.sender
    const description = props.description

    return {
      sender,
      description,
    }
  },

  template: `
        <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ sender }}: {{ description }}</span>
        </div>
  `,
})
