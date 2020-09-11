<template>
  <div class="search">
    <input
      type="text"
      v-model="city"
      @keyup.enter="findCity(city)"
      placeholder="Найти город"
    />
    <img src="../assets/search.png" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      city: ""
    };
  },
  methods: {
    ...mapActions(["findCity"])
  }
};
</script>

<style lang="scss">
.search {
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #808080;
  max-width: 90%;
  margin: 0 320px;
  margin-bottom: 40px;
  input {
    background-color: transparent;
    padding: 6px 0;
    border: none;
    outline: none;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    width: 100%;
  }
  img {
    width: 23px;
    height: 23px;
  }
  @media (max-width: 767px) {
    margin: 0 24px;
    margin-bottom: 45px;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
