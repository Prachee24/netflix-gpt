import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import movieSlice from './movieSlice'
import gptSlice from './gptSlice'
import configSlice from './configSlice'
const appStore = configureStore({
    reducer:{
        authSlice:authSlice,
        movies:movieSlice,
        gptSearch:gptSlice,
        config:configSlice

    }
})

export default appStore