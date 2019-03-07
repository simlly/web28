import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

// 全局_状态树
import global from './modules/global'

Vue.use(Vuex)
// localStorage.setItem('$url', "http://192.168.0.113:8090/");
export default new Vuex.Store({
  modules: {
    global: global
  }, 
  actions: {
    incrementAsync (context) {
      debugger;
      // axios.post('/iapd/myPbjList.do').then( function (response) {
      //   if(response.data.MyPrjInfos.length > 0){
      //     // this.myPbjList = response.data.MyPrjInfos; // 不要在actions中改变状态
      //     context.commit('incrementee', response.data.MyPrjInfos)
      //   }
      // }.bind(this))
    }
    // OnChangeObj (context, id) {
    //   debugger
    //   context.commit('ChangeObjId', id)
    //   context.state.global.currentPrjId = id
    // }
  },
  strict: process.env.NODE_ENV !== 'production' // 严格模式 状态必须在mutation中改变，不然报错
})
