import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../app/slices/counterSlice'
import carousel2listReduser from '../app/slices/carousel2listSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    carousel2list: carousel2listReduser.reducer
  },
})