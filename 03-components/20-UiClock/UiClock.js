import { defineComponent, computed, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentDate = ref(new Date())

    const updateCurrentDate = () => {
      currentDate.value = new Date()
    }

    const updateTimeInterval = setInterval(updateCurrentDate, 1000)
    onBeforeUnmount(() => {
      clearInterval(updateTimeInterval)
    })

    const currentTime = computed(() => {
      return new Intl.DateTimeFormat('en-US', { timeStyle: 'medium' }).format(currentDate.value)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
