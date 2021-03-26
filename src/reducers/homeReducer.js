

import { CHANGENUMBER } from '@/actions/actionTypes'


const initState = {
  num: 0
}

const homeModel = (state = initState, { type = '', data = ''}) => {

  switch (type) {
    case CHANGENUMBER:
      return {
        ...state,
        num: data
      }  
    default:
      return state
  }
}


export default homeModel

