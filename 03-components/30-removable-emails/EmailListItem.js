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

  emits: ['removeThisEmail'],

  setup(props, { emit }) {
    function handleClickRemoveEmail(newValue) {
      emit('removeThisEmail')
    }

    return {
      handleClickRemoveEmail,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click="handleClickRemoveEmail">❌</button>
    </li>
  `,
})
