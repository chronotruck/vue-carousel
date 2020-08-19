import { storiesOf } from "@storybook/vue";

import Simple from './simple.vue'
import notes from './notes.md'

storiesOf("Carousel/Loop", module)
  .add('simple usage', () => Simple, {
    notes: { markdown: notes }
  })
