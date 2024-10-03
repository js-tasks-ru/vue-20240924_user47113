import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const a = ref(0)
    const b = ref(0)

    const operand = ref('')

    // watch([a, b, operand], async () => {
    //   console.log(`Вы выбрали ${operand.value} в режиме ввода`)
    //   switch (operand.value) {
    //     case 'sum': {
    //       result.value = a.value + b.value
    //       break
    //     }
    //     case 'subtract': {
    //       result.value = a.value - b.value
    //       break
    //     }
    //     case 'multiply': {
    //       result.value = a.value * b.value
    //       break
    //     }
    //     case 'divide': {
    //       result.value = a.value / b.value
    //       break
    //     }
    //     default: {
    //       result.value = NaN
    //     }
    //   }
    // })
    const result = computed(() => {
      switch (operand.value) {
        case 'sum': {
          return a.value + b.value
        }
        case 'subtract': {
          return a.value - b.value
        }
        case 'multiply': {
          return a.value * b.value
        }
        case 'divide': {
          return a.value / b.value
        }
        default: {
          return NaN
        }
      }
    })

    return {
      a,
      b,
      result,
      operand,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="a"/>

      <div class="calculator__operators">
        <label><input v-model="operand" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operand" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operand" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operand" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="b" />

      <div>=</div>

      <output>{{result}}</output>
    </div>
  `,
})
