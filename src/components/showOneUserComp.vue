<template>
        <div class="card p-4  shadow mx-auto col-lg-6 col-md-10">
        <h5 class="card-header bg-success text-light">Our Information about {{user?.name}}</h5>
        <div class="card-body" >
            <h5 class="card-title">Name : {{user?.name}} </h5>
            <p class="card-text">E-mail : {{user?.email}} </p>
            <p class="card-text">Gender : {{user?.gender}}</p>
        </div>
        </div>
</template>

<script>
export default ({
    data:()=>({
        userId: "",
        userData:{}
    }),
    onMounted(){
        this.userId=this.$route.params.userId
    },
    computed:{
        user(){
            this.userId=this.$route.params.userId
            return this.$store.getters.getUserById(this.userId)
        },
    }
    
})
</script>


