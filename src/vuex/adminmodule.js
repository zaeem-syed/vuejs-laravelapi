export default{
    state:{
        usertype:"superAdmin"
    },
    mutations:{
        usertypeChange(state,payload){
            state.usertype=payload.user_type
        }
    }
}