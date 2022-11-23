import {createStore} from 'vuex'
export default createStore({
    state:{
        name :"this is vue app",
        mainTitle:'****No Title*****',
    },
    mutations:{
     setMainTitle(state,payload){
        //state.mainTitle="***********"+payload
        //state.mainTitle="'*****"+payload+"****"
        state.mainTitle="*****"+payload.title
     }
     
    },
    actions:{
        newTitle(context,payload){
            context.commit('setMainTitle',payload)
        }
    }
})