import { createSlice } from '@reduxjs/toolkit'
import { REST_REDUCERS } from '../common/REST/reducers'
import { REST_STATE } from '../common/REST/state'

export const HelloWorldStore = createSlice({
  name: 'HELLO_WORLD',
  initialState: REST_STATE,
  reducers: REST_REDUCERS,
})