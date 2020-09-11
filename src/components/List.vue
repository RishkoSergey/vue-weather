<template>
  <div class="list">
    <div v-if="today.length" class="list__info">
      <p>Прогноз погоды на 5 дней</p>
      <p>{{ city.name }}, {{ city.country }}</p>
    </div>
    <Day v-if="today.length" :data="today" />
    <Day v-if="getWeatherByDay(1).length" :data="getWeatherByDay(1)" />
    <Day v-if="getWeatherByDay(2).length" :data="getWeatherByDay(2)" />
    <Day v-if="getWeatherByDay(3).length" :data="getWeatherByDay(3)" />
    <Day v-if="getWeatherByDay(4).length" :data="getWeatherByDay(4)" />
  </div>
</template>

<script>
import Day from './Day.vue';
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    Day
  },
  computed: {
    ...mapState(['city', 'today']),
    ...mapGetters(['getWeatherByDay'])
  }
};
</script>

<style lang="scss">
.list {
  &__info {
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
