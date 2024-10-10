import { defineComponent, toRef, computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    count: {
      type: Number,
      required: true,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const counter = toRef(() => props.count)
    const min = props.min
    const max = props.max
    const isDecrementDisabled = computed(() => {
      return counter.value <= min
    })

    const isIncrementDisabled = computed(() => {
      return counter.value >= max
    })

    function increment() {
      emit('update:count', counter.value + 1)
    }

    function decrement() {
      emit('update:count', counter.value - 1)
    }

    return {
      counter,
      isDecrementDisabled,
      isIncrementDisabled,
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="isDecrementDisabled" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ counter }}</span>
      <UiButton aria-label="Increment" :disabled="isIncrementDisabled" @click="increment">➕</UiButton>
    </div>
  `,
})
