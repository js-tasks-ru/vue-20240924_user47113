import { defineComponent, reactive, watch, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = reactive({ value: 0 })

    return { counter }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter.value <= 0"
        v-on:click="counter.value--"
        
      >➖</button>

      <span class="count" data-testid="count">{{counter.value}}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter.value >= 5"
        v-on:click="counter.value++"
      >➕</button>
    </div>
  `,
})
