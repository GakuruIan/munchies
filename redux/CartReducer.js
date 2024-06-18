import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        orders:[],
        quantity:0,
        total:0
    },
    reducers:{
        addOrder:(state,action)=>{
            state.quantity+=1
            state.orders.push(action.payload)
            state.total = state.total + (action.payload.price * action.payload.quantity)
        },
        clearCart:(state)=>{
            state.orders =  []
            state.quantity = 0
            state.total = 0
        },
        removeOrder:(state,action)=>{
            const index = state.orders.findIndex((order)=>order.id === action.payload)

            if(index !== -1){
                state.orders.splice(index,1)
                state.quantity === 1 ? state.quantity  =0 : state.quantity -=1

                if(state.orders.length >  0 ){
                    state.total = state.orders.reduce((total,order)=>{
                         total = order.price * order.quantity
                    })
                }
                else{
                    state.total =0
                }
            }
        },
        addQuantity:(state,action)=>{
            const index = state.orders.findIndex((order)=>order.id === action.payload)

            if(index !== -1){
                state.orders[index].quantity += 1
                state.quantity +=1

                state.total = state.orders.reduce((total,order)=>{
                    total + order.price * order.quantity
                },0)
            }
        },
        reduceQuantity:(state,action)=>{
            const index = state.orders.findIndex((order)=>order.id === action.payload)

            if(index !== -1){

                if(state.orders[index].quantity === 1){
                    state.orders.splice(index,1)

                    state.quantity === 1 ? state.quantity = 0 :state.quantity -=1
                }
                else{
                    state.orders[index].quantity -= 1
                }

                state.total = state.orders.reduce((total,order)=>{
                    total + order.price * order.quantity
                },0)
            }
        } 
    }
})

export const {addOrder,clearCart,removeOrder,addQuantity,reduceQuantity} = CartSlice.actions

export default CartSlice.reducer