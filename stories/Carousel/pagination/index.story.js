import { storiesOf } from "@storybook/vue";

import Simple from './simple.vue'
import CustomColors from './custom-colors.vue'
import notes from './notes.md'

storiesOf("Carousel/Pagination", module)
  .add('without pagination', () => Simple, {
    notes: { markdown: notes }
  })
  .add('custom colors', () => CustomColors, {
    notes: { markdown: notes }
  })
