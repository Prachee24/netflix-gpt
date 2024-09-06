import {createSlice} from '@reduxjs/toolkit'


const authSlice=createSlice({
    name: 'auth',
    initialState:null,
    reducers:{

        addItem:(state,action) => {
            return action.payload
        },
        removeItem:(state,action) => {
            return null
        }


    }
})

export const{addItem, removeItem}=authSlice.actions

export default authSlice.reducer