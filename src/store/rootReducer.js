import { combineReducers } from 'redux';

import home from '@/reducers/homeReducer';

const rootReducer = combineReducers({
  home
})

export default rootReducer