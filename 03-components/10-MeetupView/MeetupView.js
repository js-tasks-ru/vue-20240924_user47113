import { defineComponent, computed } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupInfo,
    MeetupDescription,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const agendaLength = computed(() => {
      const arr = props.meetup.agenda
      console.log(arr.length)
      return arr.length
    })

    return {
      agendaLength,
    }
  },

  template: `
    <div>

      <!-- Обложка митапа -->
      <MeetupCover :title="meetup.title" :image="meetup.image"></MeetupCover>
      
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">

            <h2>Описание</h2>

            <!-- Описание митапа -->
             <MeetupDescription :description="meetup.description"></MeetupDescription>

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <template v-if="agendaLength > 0" >
              <MeetupAgenda :agenda="meetup.agenda"></MeetupAgenda>
            </template>
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <template v-else >
              <UiAlert :text="'Программа пока пуста...'"></UiAlert>
            </template>
          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"></MeetupInfo>
            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
