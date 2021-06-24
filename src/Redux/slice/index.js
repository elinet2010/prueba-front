import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './thunk'

const initialState = { user: null }

const slice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    initialStateUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { initialStateUser } = slice.actions

export default slice.reducer
