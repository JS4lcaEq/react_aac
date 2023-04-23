import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'carousel2list',
  initialState: {
    value: null,
    buzzy: false
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    buzzy: (state, action) => {
      state.buzzy = action.payload
    }
  },
})

let count = 0
let buzzy = false

export const load = (amount) => async (dispatch) => {
  console.log("slice carousel2list count", count, " buzzy", buzzy)
  if (!buzzy) {
    count++
    buzzy = true
    let response = await fetch("/src/assets/data.json")
    if (response.ok) {
      let json = await response.json()
      dispatch(slice.actions.set(json))
      buzzy = false
    } else {
      alert("Ошибка HTTP: " + response.status)
      buzzy = false
    }
  }
}

export default slice
