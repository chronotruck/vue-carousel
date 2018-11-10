import { configure, addDecorator } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
 
addDecorator(withNotes);
addDecorator(withOptions({
  name: 'vue-ctk-carousel'
}))

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import Carousel from '../src/Carousel.vue';
import Slide from '../src/Slide.vue';

const req = require.context('../stories', true, /\.story\.js$/);

// Install Vue plugins.
// Vue.use(Vuex);

Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withNotes);

configure(loadStories, module);