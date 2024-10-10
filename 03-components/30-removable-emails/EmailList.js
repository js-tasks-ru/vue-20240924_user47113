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

  emits: ['removeEmailWrapper'],

  setup(props, { emit }) {
    function handleEmitRemoveEmail(newValue) {
      console.log('emit')
      emit('removeEmailWrapper', newValue)
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
        @remove-email="handleEmitRemoveEmail($event)"
      />
    </ul>
  `,
})
