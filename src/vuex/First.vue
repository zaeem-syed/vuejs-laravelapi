<template>
    <div>
        <h3>view</h3>
            <p>{{$store.state.name}}</p>
            <p>{{$store.state.mainTitle}}</p>
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
    methods:{
        newTitle(){
            //this.$store.commit('setMainTitle','this is new title')
            // this.$store.commit({
            //     type:'setMainTitle',title:'this is new title by type'})
            //this.$store.commit('setMainTitle',{title:"new again data"})
            //this.$store.state.mainTitle="this is my new state"
            // calling Action here
            this.$store.dispatch({
                type:'newTitle',title:"zaeem's new title"
            })
        }

    }




}
</script>