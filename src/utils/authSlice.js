import {createSlice} from '@reduxjs/toolkit'


const authSlice=createSlice({
    name: 'auth',
    initialState:{
        uid:null,
        email:null,
        displayName: null,
        photoUrl: null,
    },
    reducers:{

        addItem:(state,action) => {
            state.uid=action.payload.uid;
            state.email=action.payload.email;
            state.displayName=action.payload.displayName;
            state.photoUrl=action.payload.photoUrl;

        },
        removeItem:(state) => {
           state.uid=null;
           state.email=null;
           state.displayName=null;
           state.photoUrl=null;
        }


    }
})

export const{addItem, removeItem}=authSlice.actions

export default authSlice.reducer