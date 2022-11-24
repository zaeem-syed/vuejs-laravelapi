import {createStore} from 'vuex'
import adminmodule from './adminmodule'
export default createStore({
    modules:{
        admin:adminmodule
    },
    



    state:{
        firstname :"this is new vue js app",
        mainTitle:'****No Title*****',
        secretkey:'12345',
        utr:'6789'
    },
    mutations:{
     setMainTitle(state,payload){
        //state.mainTitle="***********"+payload
        //state.mainTitle="'*****"+payload+"****"
        state.mainTitle="*****"+payload.title
     },
     ChangeName(state,payload){
        state.firstname=payload.name

     }
     
    },
    actions:{
        newTitle(context,payload){
            setTimeout(()=>{
                context.commit('setMainTitle',payload)
            },2000)
            
        },
        newTitle(context,payload){
           return new Promise((resolve=>{
            setTimeout(()=>{
            context.commit('setMainTitle',payload)
            resolve('ok reponse has been generated')
            },2000)
           }))
            
        },
        newTitle2(context){
            context.dispatch({
                    type:'newTitle',title:'title action 2 data calling through store.js'
            }).then((response=>{
                console.log("====",response)
            }))
        },
      
    },
    getters:{
        hashadd(state){
            return state.secretkey+'###calling from hashaddnew'
        },
        hashaddnew(state,getters){
            return state.secretkey+'##'+getters.hashadd;
        },
        newSecret:(state)=>(data)=>{
            return data+'$$'+state.secretkey
        }

        
    }
})