<template>
    <div>
        <p>{{xyz}}</p>
        <p>{{abc}}</p>
        <p>{{priavtekey}}</p>
        <p>this is secretKey {{secretkey}}</p>
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex';
export default{
      data(){
        return {

        }
      },
      computed:{
        ...mapState({
            xyz:(state) => state.mainTitle+state.secretkey,
            abc:(state)=> state.utr
        }),
        ...mapGetters({
            priavtekey:'hashadd',
            secretkey:'hashaddnew'
        })
      }
}

</script>