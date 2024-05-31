import {createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isLoggedIn:false,
    },
    reducers:{
        login:(state,action)=>{
            state.currentUser = action.payload,
            state.isLoggedIn = true
        },
        loginFailure:(state)=>{
           state.currentUser = null
           state.isLoggedIn = false
        },
        logout:(state)=>{
            state.isLoggedIn = false
            state.currentUser = null
        }
    }
})

export const {login,loginFailure,logout} = UserSlice.actions


export default UserSlice.reducer