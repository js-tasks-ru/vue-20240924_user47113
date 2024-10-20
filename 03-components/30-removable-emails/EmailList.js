import { computed, defineComponent } from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['removeEmail'],

  setup(props, { emit }) {
    function handleEmitRemoveEmail(newValue) {
      emit('removeEmail', newValue)
    }

    return {
      handleEmitRemoveEmail,
      removeEmail: () => console.log('email'),
    }
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        :emailId="index"
        @remove-this-email="handleEmitRemoveEmail(index)"
      />
    </ul>
  `,
})
