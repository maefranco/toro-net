import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  user: {},
  counts: {
    count: -1
  },
  posts: {},
  friendpath:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
  /*,
  getters: {
    friendpath: state => state.friendpath
  }*/
})
