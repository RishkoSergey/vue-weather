<template>
  <div class="hours">
    <div class="hours__hour">
      {{ weather.dt_txt.slice(11, 16) }}
    </div>
    <img :src="getImage" class="hours__image" />
    <div class="hours__descr">
      {{ weather.weather[0].description }}
    </div>
    <div class="hours__temp">
      {{ Math.round(weather.main.temp) }}°C
    </div>
  </div>
</template>

<script>
export default {
  props: ['weather'],
  computed: {
    getImage: function() {
      return require(`../assets/${this.weather.weather[0].main.toLowerCase()}.png`);
    }
  }
}
</script>

<style lang="scss">
.hours {
  width: 72px;
  min-width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__image {
    width: 65px;
    height: 65px;
  }
  &__descr {
    font-size: 10px;
    color: #808080;
    text-align: center;
    height: 22px;
    margin-bottom: 8px;
  }
}
</style>