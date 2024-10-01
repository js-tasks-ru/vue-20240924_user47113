import { defineComponent, onMounted, ref, watch, onUpdated } from 'vue'
import { getMeetup } from './meetupsService.ts'
import { get } from '@vueuse/core'
// import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetup = ref({
      id: 1,
      title: '',
    })

    const minId = 1
    const maxId = 5

    async function getMeetupInfo() {
      const response = await getMeetup(meetup.value.id)
      meetup.value.title = response.title
    }
    onMounted(async () => {
      try {
        await getMeetupInfo()
      } catch (error) {
        console.error(error)
      }
    })
    // onUpdated(() => console.log('updated!'))
    watch(
      meetup,
      () => {
        getMeetupInfo()
      },
      { deep: true },
    )

    return {
      minId,
      maxId,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" 
        :disabled="meetup.id <= minId"
        v-on:click="meetup.id--"
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <!-- <template v-for="n in maxId">
          <div class="radio-group__button">
            <input
              :id="'meetup-id-' + n"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="n"
              v-model="meetup.id"
            />
            <label for="meetup-id-1" class="radio-group__label">{{ n }}</label>
          </div>
          </template> -->
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
              v-model="meetup.id"
            />
            <label for="meetup-id-2" class="radio-group__label">1</label>
          </div>       
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
              v-model="meetup.id"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
              v-model="meetup.id"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
              v-model="meetup.id"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
              v-model="meetup.id"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" 
        :disabled="meetup.id >= maxId" 
        v-on:click="meetup.id++"
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
