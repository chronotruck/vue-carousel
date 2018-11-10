import { storiesOf } from "@storybook/vue";

import PerPage from './per-page.vue'
import PerPageResponsive from './per-page-responsive.vue'
import notes from './notes.md'

storiesOf("Carousel/Per page", module)
  .add('custom slides per page', () => PerPage, { notes: { markdown: notes } })
  .add('responsive slides per page', () => PerPageResponsive, { notes: { markdown: notes } })
  // .add('scroll per page', () => ScrollPerPageComponent, ScrollPerPageNote)
