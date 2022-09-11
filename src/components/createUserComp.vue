<template>
    <div class="shadow p-4  mx-auto col-lg-6 col-md-10 ">
        <h2 class="text-center my-3">Create New User</h2>
        <div class="mb-3 d-flex flex-wrap position-relative">
            <span class="px-3 py-1 position-absolute"><i class="fa-solid fa-user"></i></span>
            <input type="text" :class="['form-control', 'px-5',errors.nameError?'border border-danger':'']" name="userName" placeholder="Name"  v-model="userName" @keyup="handleNameErrors">
            <span class="text-danger d-block mt-2">{{errors.nameError}}</span>
        </div>
        <div class="mb-3 d-flex flex-wrap position-relative">
            <span class="px-3 py-1 position-absolute"><i class="fa-solid fa-envelope"></i></span>
            <input type="email" :class="['form-control', 'px-5',errors.emailError?'border border-danger':'']" name="userEmail" placeholder="E-Mail" v-model="userEmail" @keyup="handleEmailErrors">
            <span class="text-danger d-block mt-2">{{errors.emailError}}</span>
        </div>
        <div class="mb-3">
            <label class="">Gender : </label>
            <div class="form-check mx-3">
                <input class="form-check-input" type="radio" name="userGender"  value="male" checked v-model="userGender">
                <label class="form-check-label">
                    Male
                </label>
            </div>
            <div class="form-check mx-3">
                <input class="form-check-input" type="radio" name="userGender"  value="female" v-model="userGender">
                <label class="form-check-label">
                    Female
                </label>
            </div>
        </div>
        <span class="text-danger d-block my-2" v-if="errors.allFieds">{{errors.allFieds}}</span>
        <button class="btn btn-primary w-100" @click="handleAddUser">Create User</button>
    </div>
</template>

<script>

    export default{
        data:()=>({
            userName:"",
            userEmail:"",
            userGender:"male",
            errors:{
                nameError:"",
                emailError:"",
                allFieds:""
            }
        }),
        methods:{
            handleNameErrors(){
                if(this.userName == ""  ){
                    this.errors.nameError="The Name is Required"
                }else if(!(/^[a-zA-Z]+[ ]{0,1}[a-zA-Z]{0,}$/.test(this.userName))){
                    this.errors.nameError="The Name can't Contain any Number only Letter"
                }
                else{
                    this.errors.nameError=""
                }
            },
            handleEmailErrors(){
                if(this.userEmail == ""  ){
                    this.errors.emailError="The E-mail is Required"
                }else if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.userEmail))){
                    this.errors.emailError="Invalid Email EX: name@example.ab"
                }
                else{
                    this.errors.emailError=""
                }
            },
            handleAddUser(){
                if( !this.errors.emailError && !this.errors.nameError && this.userName && this.userEmail){
                    let userData={
                            "name":`${this.userName}`,
                            "gender":`${this.userGender}`,
                            "email":`${this.userEmail}`,
                            "status":"active"
                    }
                    this.$store.dispatch('CreateUser',userData)
                    this.cleanFeilds();
                    this.$router.push('/');
                }else{
                    this.errors.allFieds="Please, Enter all Fields"
                }
            },
            cleanFeilds(){
                this.userName="";
                this.userEmail="";
                this.userGender="male";
                this.errors={
                    nameError:"",
                    emailError:"",
                    allFieds:"",
                }
            }
        }
    }
</script>
