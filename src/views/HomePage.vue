<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-hedaer">
                            add New Book
                        </div>
                        <div class="card-body">
                            <form action=""  method="post" @submit.prevent="Addbook()">
                            <div class="form-group">
                                <label for="">name</label>
                                <input type="text" name="name" id="" class="form-control" v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="">Description</label>
                                <input type="text" name="name" id="" class="form-control" v-model="description">
                            </div>
                            <div class="form-group">
                                <label for="">Cost</label>
                                <input type="price" name="name" id="" class="form-control" v-model="cost">
                            </div>
                            
                                <button type="submit" class="btn btn-submit btn-sm">Submit</button>
                            
                        </form>
                        </div>
                    </div>
                </div> 
                <div class="col-md-5">
                        
                           <table class="table">
                            <thead>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </thead>
                            <tbody v-for="books in book.data" :key="books.id">
                                <td>{{books.id}}</td>
                                <td>{{books.name}}</td>
                                <td>{{books.cost}}</td>
                                <td>{{books.description}}</td>
                                <td><a href="javascript:;"  class="btn btn-success btn-sm" @click="edit(books.id)">Edit</a>
                                    <button class="btn btn-danger btn-sm" @click="DeleteBook(books.id)">Delete</button>
                                </td>

                            </tbody> 
                           </table>


                        
                        
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios'
import router from '@/router';
export default{
    data(){
        return {
            name:'',
            cost:'',
            description:'',
            book:{},
            //token:''
        }
    },
    mounted(){
        //this.token=localStorage.getItem('token');
        setInterval(()=>{
                this.refresh()
            },1000)
        
    },
    methods:{
        edit(id){
            router.push('/editpage/'+id)
        },
        Addbook(){
            axios.post('http://laravelpassport.test:8081/api/createbook',
            {name:this.name,cost:this.cost,description:this.description}).then(response=>{
                this.book=response.data
            })
        },
        refresh()
        {
            axios.get('http://laravelpassport.test:8081/api/allbook').then(response=>{
            this.book=response.data
            //this.token=localStorage.getItem('token');
        })
        },  
        DeleteBook(id)
        {
            axios.delete(`http://laravelpassport.test:8081/api/delete/`+id).then(response=>{
                this.book=response.data
            })
        }

         
    }
    
}


</script>