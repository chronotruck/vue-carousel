<template>
  <div>
    <carousel
      :per-page="4"
    >
      <slide
        v-for="(slide, k) in slides"
        :key="k"
        :class="[slide.color]"
        class="slide"
      >
        <span>{{ slide.value }}</span>
      </slide>
    </carousel>
  </div>
</template>

<script>
  export default {
    name: 'example',
    data () {
      return {
        slides: Array.from(new Array(10)).map((_, index) => ({
          value: index,
          color: index % 2 ? 'primary': 'secondary'
        }))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide{
    display: flex;
    min-height: 200px;

    & > span{
      margin: auto;
      color: white;
      font-size: 24px;
      font-family: Arial, Helvetica, sans-serif;
    }
    
    &.primary{
      background: #96bf31;
    }

    &.secondary{
      background: #277696;
    }
  }
</style>