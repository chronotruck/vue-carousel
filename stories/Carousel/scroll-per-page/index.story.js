import { storiesOf } from "@storybook/vue";

import PerScroll from './per-scroll.vue'
import PerSlide from './per-slide.vue'
import notes from './notes.md'

storiesOf("Carousel/Scroll per page", module)
  .add('per page', () => PerScroll, { notes: { markdown: notes } })
  .add('per slide', () => PerSlide, { notes: { markdown: notes } })
  // .add('scroll per page', () => ScrollPerPageComponent, ScrollPerPageNote)
