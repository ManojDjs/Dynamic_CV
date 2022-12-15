import { createStore } from 'vuex'
import Json from "@/assets/Data/data.json"
export default createStore({
  state: {
    main: Json[0]['Main'],
    leetcode: Json[1]['LeetCode'],
    about: Json[2]['About me'],
    experience: Json[3]['Experience'],
    social: Json[4]['Social'],
    service: Json[5]['Services']
  },
  getters: {
    getmain: state => state.main,
    getleetcode: state => state.leetcode,
    getabout: state => state.about,
    getsocial: state => state.social,
    // getservice: state > state.service
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
