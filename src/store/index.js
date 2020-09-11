import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    today: [],
    nextDays: [],
    city: {}
  },
  mutations: {
    setWeather(state, data) {
      const todayData = Number(data.list[0].dt_txt.substr(8, 2));
      state.today = data.list.filter(elem => Number(elem.dt_txt.substr(8, 2)) === todayData);
      state.nextDays = data.list.slice(state.today.length, state.today.length + 32);
      state.city = data.city;
    }
  },
  actions: {
    async findCity(ctx, city) {
      await axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bc1a7654b8db930b97d108c50230371a&lang=ru`)
        .then(res => ctx.commit('setWeather', res.data))
    }
  },
  getters: {
    getWeatherByDay: state => day =>  {
      return state.nextDays.slice((day-1)*8, day*8);
    }
  }
})
