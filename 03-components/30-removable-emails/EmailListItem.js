import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    emailId: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['removeEmail'],

  setup(props, { emit }) {
    function handleClickRemoveEmail(newValue) {
      console.log('Click', newValue)
      emit('removeEmail', newValue)
    }

    return {
      handleClickRemoveEmail,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click="handleClickRemoveEmail(emailId)">❌</button>
    </li>
  `,
})
