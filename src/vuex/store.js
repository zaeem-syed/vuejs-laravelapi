import {createStore} from 'vuex'
export default createStore({
    state:{
        name :"this is vue app",
        mainTitle:'****No Title*****',
        secretkey:'12345',
        utr:'6789'
    },
    mutations:{
     setMainTitle(state,payload){
        //state.mainTitle="***********"+payload
        //state.mainTitle="'*****"+payload+"****"
        state.mainTitle="*****"+payload.title
     }
     
    },
    actions:{
        // newTitle(context,payload){
        //     setTimeout(()=>{
        //         context.commit('setMainTitle',payload)
        //     },2000)
            
        // }
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
                    type:'newTitle',title:'title action 2 data'
            }).then((response=>{
                console.log("====",response)
            }))
        }
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