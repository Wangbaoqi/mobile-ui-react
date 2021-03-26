

import { useHistory, useLocation } from 'react-router-dom'





const RouterHandle = () => {
  const history = useHistory();


  const go = (url) => {
    history.push(url)
  }

  const back = (step = -1) => {
    history.goBack()
  }



  return {
    go,
    back
  }

}


export default RouterHandle