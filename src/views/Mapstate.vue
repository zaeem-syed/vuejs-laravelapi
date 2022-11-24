<template>
    <div>
        <!-- <p>{{xyz}}</p>
        <p>{{abc}}</p> -->
        <!-- <p>{{priavtekey}}</p>
        <p>this is secretKey {{secretkey('this is using mapgetters')}}</p> -->

        <p>{{$store.state.firstname}}</p>
        <p>{{$store.state.mainTitle}}</p>
           
        <!-- <button @click="SetnewName({name:'this is title through map Mutations'})">Click to Change Title</button> -->
          
        <!-- <button @click="SettingName">Click to change name</button> -->


        <button @click="SettingNameMutator({name:'setting name through map mutator'})">Click to Change Through Map Mutator</button>


    </div>
</template>
<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex';
export default{
      data(){
        return {

        }
      },
      computed:{
        ...mapState({
            xyz:(state) => state.mainTitle,
            abc:(state)=> state.utr
        }),
        ...mapGetters({
            priavtekey:'hashadd',
            secretkey:'newSecret'
        }),
       
      },
      methods:{
    //     ...mapActions({
    //         newTitle:'newTitle'
    //     })
    //   },
    //    ...mapMutations({
    //     SetnewName:'setName'
    //   }),
    //   SettingName(){
    //     this.$store.commit('ChangeName',{name:'this is old vue js app'})
    //     console.log($store.name);
    //   }
    ...mapMutations({
        SettingNameMutator:'ChangeName'
    })
}
}

</script>