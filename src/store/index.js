import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plan: {
      sections: [],
      lights: [],
      switches: [],
      joints: [],
      links: [
      {
        id: '',
        xy: [
          {
            x1: 0,
            y1: 0,
            x2: 1000,
            y2: 1000
          },
          {
            x1: 0,
            y1: 1000,
            x2: 1000,
            y2: 0
          }
        ]
      },
      {
        id: '',
        xy: []
      },
    ]
    }
  },
  getters: {
    GET_PLAN: state => {
      return state.plan
    }
  },
  mutations: {
    SET_PLAN (state,  plan) {
      state.plan = plan
    }
  },
  actions: {
    async GET_PLAN (context) {
      try {
        const { data: plan } = await axios.get('/plan')
        context.commit('SET_PLAN', plan)
        console.log(plan)
      }
      catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
