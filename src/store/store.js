import { createStore } from 'vuex';
import axioxInstance from '@/apis/axios';

const store = createStore({
    state:{
        users:[]
    },
    mutations:{
        setInitailState(state ,initialState){
            state.users=[...initialState];
        },

        deleteUser(state , userId){
            let newState = state.users.filter(user => user.id != parseInt(userId))
            state.users=[...newState]
        },

        updateUser(state , {userId, UpdatedUserData}){
            let newState = state.users.filter(user =>{
                if(user.id == userId){
                    return {
                        id:user.id,
                        name:UpdatedUserData.name,
                        email:UpdatedUserData.email,
                        gender:UpdatedUserData.gender
                    }
                }
            })
            state=[...newState];
        },

        CreateUser(state ,allUserData){
            // let newUsers=[...state.users , allUserData]
            state.users=[...state.users , allUserData];
        }
    },
    actions:{
        // Get All Users
        async setInitailState({commit}){
            await  axioxInstance.get('/')
            .then( res=> commit('setInitailState', res.data))
            .catch(err => console.log(err));
        },

        // Create User
        async CreateUser({commit},userData){
            await axioxInstance.post('/',userData)
            .then((res)=> {
                let allUserData =res.data
                commit('CreateUser',allUserData)
            })
            .catch(err => console.log(err)) 
        },

        // Update User
        async updateUser({commit},{userId,UpdatedUserData}){
            await axioxInstance.patch(`/${userId}`,UpdatedUserData)
            .then(()=> {
                commit('updateUser',{userId,UpdatedUserData})
            })
            .catch(err => console.log(err)) 
        },
        // Delete User
        async deleteUser({commit},userId){
            await axioxInstance.delete(`/${userId}`)
            .then(()=> commit('deleteUser',userId))
            .catch(err => console.log(err)) 
        },
        
        
    },
    getters:{
        getUsers: state=> state.users ,
        getUserById: (state)=>(userId)=>{
            return  state.users.find(user =>(user.id === parseInt(userId)))
        }
        
    }
});

export default store;