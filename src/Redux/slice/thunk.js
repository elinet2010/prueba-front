import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from './repository'

export const fetchUsers = createAsyncThunk('Users/fetchUsers', () =>
  API.fetchAllUsers()
)
