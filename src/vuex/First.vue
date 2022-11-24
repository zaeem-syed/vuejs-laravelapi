<template>
    <div>
        <h3>view</h3>
            <p>{{$store.state.name}}</p>
            <p>{{$store.state.mainTitle}}</p>
            <p>this is private key=={{privatekey}}</p>
            <p>this is secret key=={{secretKey}}</p>
            <button @click="newTitle">Change Title</button>
        <Child/>
    </div>
</template>
<script>
import Child from "./Child.vue"
export default{

    name:'First',   
    components:{
        Child
    },
    computed:{
        privatekey(){
            return this.$store.getters.hashaddnew;
        },
        secretKey(){
            return this.$store.getters.newSecret('this is new secret key');
        }
    },
    methods:{
        // newTitle(){
        //     //this.$store.commit('setMainTitle','this is new title')
        //     // this.$store.commit({
        //     //     type:'setMainTitle',title:'this is new title by type'})
        //     //this.$store.commit('setMainTitle',{title:"new again data"})
        //     //this.$store.state.mainTitle="this is my new state"
        //     // calling Action here
        //     // this.$store.dispatch({
        //     //     type:'newTitle',title:"zaeem's new title"
        //     // })
        //     //---------------
        //     // this.$store.dispatch({
        //     //     type:'newTitle',title:"zaeem's new title"
        //     // }).then((response=>{
        //     //     console.log("called",response)
        //     // }))
        //     //---------------
        //     this.$store.dispatch({
        //         type:'newTitle2',title:"zaeem's new title 2"
        //     })
        // }

    },





}
</script>