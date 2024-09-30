import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'app',

  setup() {
    function printDateAsLocalDate() {
      return new Date().toLocaleString(navigator.language, { dateStyle: 'long' })
    }
    return {
      printDateAsLocalDate,
    }
  },

  template: `
    <div>Сегодня {{printDateAsLocalDate()}}</div>
  `,
})

const app = createApp(App)

const vm = app.mount('#app')
