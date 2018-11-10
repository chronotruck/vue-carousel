import { storiesOf } from "@storybook/vue";

import Simple from './simple.vue'
import CustomHandles from './custom-handles.vue'
import notes from './notes.md'

storiesOf("Carousel/Navigation", module)
  .add('simple usage', () => Simple, {
    notes: { markdown: notes }
  })
  .add('custom navigation handles', () => CustomHandles, {
    notes: { markdown: notes }
  })
