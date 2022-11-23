<template>
    <div >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                             <form action="" @submit.prevent="Login()">
                                <div class="form-group">
                                    <label for="">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="" class="form-control" v-model="email">
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="" class="form-control" v-model="password">
                                </div>

                                <button type="submit" class="btn btn-success">Login</button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
import axios from 'axios'
export default{
data(){
    return {
        email:'',
        password:'',
        token:'',
    }
},
methods:{
    Login(){
        if(this.email > length <0)
        {
            alert("please enter the email");

        }
        if(this.password > length < 0)
        {
            alert("please enter the password");

        }
        axios.post('http://laravelpassport.test:8081/api/login',{
              email:this.email,password:this.password
        }).then(response=>{
            this.token=response.data.token
            //
            localStorage.setItem('token', this.token); 
            this.$router.push({ name: 'HomePage', query: { redirect: '/homepage' } });

        })
    }   
}



}


</script>