<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          
        <div v-if="showmsg" class="alert alert-success">
        <p>your data has been loaded</p>
        
        </div>

        <template v-if="showdata">
        <table class="table">
            <thead>
                <th>user id</th>
                <th>title</th>
                <th>body</th>

            </thead>
            <tbody v-for="data in receiveddata" :key="data.id">
                <td>{{data.id}}</td>
                 <td>{{data.title}}</td>
                 <td>{{data.body}}</td>


            </tbody>

        </table>
        </template>

    

        <button @click="show()">click me to show data</button>





    </div>
</template>



<script>
import axios from 'axios'
export default{
data(){
    return {
        showdata:false,
        showmsg:false,
        receiveddata:{}
    }
},
methods:{
    show(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            this.showdata=true;
            this.showmsg=true;
            this.receiveddata=res.data
        })
    }
}

}


</script>