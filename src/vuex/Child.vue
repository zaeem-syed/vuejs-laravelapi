<template>
<div>

    <p>This is Child</p>
    <p>{{$store.state.admin.usertype}}</p>
    <button @click="changeusertype({user_type:'new admin'})">Change User type</button>
</div>



</template>
<script>
    import { mapState,mapGetters,mapActions,mapMutations } from 'vuex';

export default{
        data(){
            return {

            }
        },
        methods:{
            ...mapMutations({
                changeusertype:'usertypeChange'
            })
        }
}

</script>



