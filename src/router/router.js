import {createRouter , createWebHistory} from 'vue-router';

import showUsersComp from '../components/showUsersComp.vue'
import createUserComp from '../components/createUserComp.vue'
import showOneUserComp from '../components/showOneUserComp.vue'
import editUserComp from '../components/editUserComp.vue'
import notFoundComp from '../components/notFoundComp.vue'


const routes =[
    {path:"/" ,name:"showUsers", component:showUsersComp},
    {path:"/create" ,name:"createUser", component:createUserComp},
    {path:"/showuser/:userId" ,name:"showUser", component:showOneUserComp},
    {path:"/editUser/:userId",name:'editUser' , component:editUserComp},
    {path:"/:catchAll(.*)" , component:notFoundComp},

];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;