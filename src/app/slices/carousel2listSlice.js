import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'carousel2list',
  initialState: {
    value: ["ini value of carousel2list"],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})



export const load = (amount) => async (dispatch) => {
  let response = await fetch("/src/assets/data.json");

  if (response.ok) { 
    let json = await response.json();
    dispatch(slice.actions.set(json))
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

}

export default slice
