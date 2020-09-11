<template>
  <div class="day">
    <div class="day__date">
      {{ data[0].dt_txt.substr(0, 10) }}
    </div>
    <div class="day__hours">
      <Hours v-for="hour in data" :key="hour.dt" :weather="hour" />
    </div>
  </div>
</template>

<script>
import Hours from './Hours.vue';

export default {
  components: {
    Hours
  },
  props: ["data"]
}
</script>

<style lang="scss">
.day {
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: calc(100%-20px);
  &__hours {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
  }
}
</style>