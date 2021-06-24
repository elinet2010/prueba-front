// import external modules
import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../slice/index'

const rootReducer = combineReducers({
  Users: userReducer,
})

export default rootReducer