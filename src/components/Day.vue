<template>
  <div class="day">
    <div class="day__date">
      {{ data[0].dt_txt.substr(0, 10) }}
      <img src="../assets/scroll.png" />
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
  &__date {
    margin-bottom: 10px;
    color: #0014a8;
    img {
      display: none;
    }
  }
  &__hours {
    display: flex;
    flex-flow: row nowrap;
  }
  @media(max-width: 767px) {
    padding: 5px;
    width: calc(100%-10px);
    &__hours {
      overflow-x: scroll;
    }
  }
  @media (max-width: 600px) {
    &__date {
      position: relative;
      img {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>