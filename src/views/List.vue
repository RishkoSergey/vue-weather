<template>
  <div class="list">
    <div v-if="!notFound" class="list__info">
      <p>Прогноз погоды на 5 дней</p>
      <p>{{ city.name }}, {{ city.country }}</p>
    </div>
    <div v-else class="list__info">
      <p>Город не найден. Проверьте правильность написания названия города.</p>
    </div>
    <Day v-if="today.length" :data="today" />
    <Day v-if="getWeatherByDay(1).length" :data="getWeatherByDay(1)" />
    <Day v-if="getWeatherByDay(2).length" :data="getWeatherByDay(2)" />
    <Day v-if="getWeatherByDay(3).length" :data="getWeatherByDay(3)" />
    <Day v-if="getWeatherByDay(4).length" :data="getWeatherByDay(4)" />
  </div>
</template>

<script>
import Day from '../components/Day.vue';
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    Day
  },
  computed: {
    ...mapState(['city', 'today', 'notFound']),
    ...mapGetters(['getWeatherByDay'])
  },
  mounted() {
    if (!this.today.length) {
      this.findCity(this.$route.params.city);
    }
  },
  methods: mapActions(['findCity'])
};
</script>

<style lang="scss">
.list {
  &__info {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 15px;
  }
}
</style>
