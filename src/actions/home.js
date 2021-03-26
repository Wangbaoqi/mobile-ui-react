

import { CHANGENUMBER } from './actionTypes'

console.log(CHANGENUMBER, 'actions');

const changeNumber = data => {
  return {
    type: CHANGENUMBER,
    data
  }
}



export default changeNumber