# Vue Carousel

[![Latest Stable Version](https://img.shields.io/npm/v/vue-ctk-carousel.svg)](https://www.npmjs.com/package/vue-ctk-carousel)

**This project is a hard fork from the [vue-carousel](https://github.com/SSENSE/vue-carousel) component by SSENSE. We decided to fork it for our own usage since the updates where not made very often.**

**Feel free to submit issues and feature requests [here](https://github.com/chronotruck/vue-ctk-carousel/issues)**.

[Full documentation and examples](https://ssense.github.io/vue-ctk-carousel)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

## Installation

``` bash
npm install vue-ctk-carousel
```

or if you prefer yarn

``` bash
yarn add vue-ctk-carousel
```

## Usage

### Global

You may install Vue Carousel globally:

``` js
import Vue from 'vue';
import VueCarousel from 'vue-ctk-carousel';

Vue.use(VueCarousel);
```

This will make **&lt;carousel&gt;** and **&lt;slide&gt;** available to all components within your Vue app.

### Local

Include the carousel directly into your component using import:

``` js
import { Carousel, Slide } from 'vue-ctk-carousel';

export default {
  ...
  components: {
    Carousel,
    Slide
  }
  ...
};
```

### Configuration

| Property                  | Type    | Default | Description                                                                                                                                                                                                                                                                           |
|:--------------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| easing                    | String  | ease    | Slide transition easing. Any valid CSS transition easing accepted.                                                                                                                                                                                                                    |
| minSwipeDistance          | Number  | 8       | Minimum distance for the swipe to trigger a slide advance.                                                                                                                                                                                                                            |
| navigationClickTargetSize | Number  | 8       | Amount of padding to apply around the label in pixels.                                                                                                                                                                                                                                |
| mouseDrag                 | Boolean | true    | Flag to toggle mouse dragging.                                                                                                                                                                                                                                                        |
| navigationEnabled         | Boolean | false   | Flag to render the navigation component (next/prev buttons).                                                                                                                                                                                                                          |
| navigationNextLabel       | String  | ▶       | Text content of the navigation next button.                                                                                                                                                                                                                                           |
| navigationPrevLabel       | String  | ◀       | Text content of the navigation prev button.                                                                                                                                                                                                                                           |
| paginationActiveColor     | String  | #000000 | The fill color of the active pagination dot. Any valid CSS color is accepted.                                                                                                                                                                                                         |
| paginationColor           | String  | #efefef | The fill color of pagination dots. Any valid CSS color is accepted.                                                                                                                                                                                                                   |
| paginationEnabled         | Boolean | true    | Flag to render pagination component.                                                                                                                                                                                                                                                  |
| paginationPadding         | Number  | 10      | The padding inside each pagination dot. Pixel values are accepted.                                                                                                                                                                                                                    |
| paginationSize            | Number  | 10      | The size of each pagination dot. Pixel values are accepted.                                                                                                                                                                                                                           |
| perPage                   | Number  | 2       | Maximum number of slides displayed on each page.                                                                                                                                                                                                                                      |
| perPageFixed                   | Boolean  | false       | Specify if the slides should have a fixed width according to the page number.                                                                                                                                                                                                                                      |
| perPageCustom             | Array   |         | Configure the number of visible slides with a particular browser width. This will be an array of arrays, ex. [[320, 2], [1199, 4]]. Formatted as [x, y] where x=browser width, and y=number of slides displayed. Ex. [1199, 4] means if (window <= 1199) then show 4 slides per page. |
| resistanceCoef            | Number  | 20      | Resistance coefficient to dragging on the edge of the carousel. This dictates the effect of the pull as you move towards the boundaries.                                                                                                                                              |
| scrollPerPage             | Boolean | true   | Scroll per page, not per item.                                                                                                                                                                                                                                                        |
| speed                     | Number  |         | Slide transition speed. Number of milliseconds accepted.                                                                                                                                                                                                                              |
| loop                      | Boolean | false   | Flag to make the carousel loop around when it reaches the end.                                                                                                                                                                                                                        |
| navigateTo                | Number  | 0       | Listen for an external navigation request using this prop.                                                                                                                                                                                                                            |
| spacePadding              | Number  | 0       | Stage padding option adds left and right padding style (in pixels) onto VueCarousel-inner.                                                                                                                                                                                            |
| initialSpacePadding              | Number  | 0       | Initial space padding added to the left side, if the padding factor align the slides to the left. Cannot be bigger than `spacePadding`.                                                                                                                                                                                            |
| spacePaddingFactor        | Number  | 0       | Add a padding factor to manage how the last item is rendered on the carousel. Common values are: (`0`: the last item is aligned to the center, like the first item; `1`: the last item is aligned to the right of the carousel, `2`: the last item is overflowed by it's container (previous behaviour))                                                                                                                                                                                            |

### Events

| Event                     | Type    | Emitter  | Description                                                                                                                                                                                                                                                                           |
|:--------------------------|:--------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slideClick                | Object  | Slide    | "slideClick" event throws the *dataset* object of the selected element                                                                                                                                                                                                          |

### HTML Structure

Once the **Carousel** and **Slide** components are installed globally or imported, they can be used in templates in the following manner:

``` html
  <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide>
      Slide 1 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
  </carousel>
```

To listen for the 'slideClick' event you can do the following:

```html
  <carousel>
    <slide
        data-index="0"
        data-name="MySlideName"
        @slideClick="handleSlideClick">
      Slide 1 Content
    </slide>
    ...
  </carousel>
```

```js
  handleSlideClick (dataset) => {
    console.log(dataset.index, dataset.name)
  }
```

## Development

A sandboxed dev environment is provided by [vue-play](https://github.com/vue-play/vue-play). Changes made to the component files will appear in real time in the sandbox.

To begin development, run:

``` bash
npm install
npm run dev
```

or, if you prefer yarn

``` bash
yarn install
yarn dev
```

then navigate to `http://localhost:5000`

To modify and add sandbox scenarios, edit `play/index.js`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
