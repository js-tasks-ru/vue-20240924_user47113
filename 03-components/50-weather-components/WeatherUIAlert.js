import { defineComponent, toRef } from 'vue'

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
    const senderTpl = toRef(() => props.sender)
    const descriptionTpl = toRef(() => props.description)

    return {
      senderTpl,
      descriptionTpl,
    }
  },

  template: `
        <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ senderTpl }}: {{ descriptionTpl }}</span>
        </div>
  `,
})
