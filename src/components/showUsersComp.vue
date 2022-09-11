<template>
    <h2 class="my-4 text-center">All Users</h2>
    <loadind v-if="users?.length == 0"/>
    <div class="table-responsive-md shadow  mt-3 p-4 " v-if="users?.length > 0">
        <table class="table text-center  table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(user,index) in users" :key="user?.id">
                <th scope="row">{{index+1}}</th>
                <td>{{user?.name}}</td>
                <td>{{user?.email.substring(0,20) +"..."}}</td>
                <td>{{user?.gender}}</td>
                <td>
                    <span class="d-flex align-items-center justify-content-center">
                        <router-link :to="{name : 'showUser',params:{userId : user?.id}}"><i class="fa-solid fa-eye text-primary mx-2"></i> </router-link> |
                        <router-link :to="{name : 'editUser',params:{userId : user?.id}}"><i class="fa-solid fa-pen-to-square mx-2 text-warning"></i></router-link> |
                        <i class="fa-solid fa-circle-xmark mx-2"  data-bs-toggle="modal" :data-bs-target="'#user'+user?.id" data-bs-dismiss="modal"></i>
                    </span>
                </td>
                <!-- Delete Model -->
                <div class="modal fade" :id="'user'+user?.id" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Delete <span class="text-primary">{{user?.name}}</span></h5>
                        </div>
                        <div class="modal-body text-start">
                            Are You Sure ?!..
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success" :data-bs-target="'#user'+user?.id" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn btn-danger" data-bs-dismiss="modal"  @click="deleteUser(user?.id)">Delete</button>
                        </div>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import loadind from './loadingComp.vue'

export default{
    data:()=>({
        usersData :[]
    }),
    methods:{
        deleteUser(userId){
            this.$store.dispatch('deleteUser',userId);
        },
    },
    async created(){
        await this.$store.dispatch("setInitailState");
    },
    computed:{
        users(){
            return this.$store.getters.getUsers;
        }
    },
    components:{
        loadind
    }
}
</script>

<style scoped>

.fa-circle-xmark{
    color:rgba(240, 0, 0, .9)
}
.fa-pen-to-square,.fa-circle-xmark ,.fa-eye{
    cursor: pointer;
}
</style>
