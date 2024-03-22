import {createSlice} from '@reduxjs/toolkit'

import { deleteAllUsers } from "../actions/Actions";
const usersSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            console.log(action.payload)
            state.push(action.payload)
        }
        ,
        removeUser(state,action){
            // state.pop(action.payload,1)
            // let userIndexNumber=state.indexOf(action.payload);
            // state.splice(userIndexNumber,1)
            state.splice(action.payload,1);
        },
        // deleteAllUsers(state,action){
        //    return []
        // },
    },
    // extraReducers(builder){
    //     builder.addCase(usersSlice.actions.deleteAllUsers,()=>{
    //         return [];
    //     })


   // }

   extraReducers(builder){
    builder.addCase(deleteAllUsers,()=>{
        return [];
    })
}
})
//   console.log(usersSlice.actions);
export default usersSlice.reducer;

export const {addUser,removeUser}=usersSlice.actions;