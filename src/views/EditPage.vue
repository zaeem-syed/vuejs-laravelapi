<template>
<div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


<h3 class="text-center">Edit Product</h3>
      
<div class="alert alert-success col-md-5" v-if="successMessage">

    <p class="bg-success" > your Record has been Updated</p>

</div>



        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateBook()">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="books.name" >
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="books.description">
                    </div>
                    <div class="form-group">
                        <label>Cost</label>
                        <input type="text" class="form-control" v-model="books.cost">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>





</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            books:{},
            successMessage:false,
        }
    },
    created(){
        let id=this.$route.params.id;
        axios.get("http://laravelpassport.test:8081/api/single-book/"+id).then(response=>{
            this.books=response.data.data
            console.log(response.data);

        })
    },
    methods:{
        updateBook(){
            let id=this.$route.params.id;
            //console.log(id);
            axios.put('http://laravelpassport.test:8081/api/update/'+id,
                this.books
            ).then(response=>{
                this.successMessage=true;    
                this.books=response.data;
                
            })

        }
    }

}

</script>