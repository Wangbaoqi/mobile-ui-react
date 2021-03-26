import React, { useState } from 'react'

import PopUp from '@/component/ux/Popup/index'


const PopUpView = () => {


  const [popShow, setPopShow] = useState(false);


  const content = (
    <div>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
    </div>
  )
  return (

    <div className='popup-view'>


      <button onClick={() => setPopShow(true)} >popShow</button>

      <PopUp 
        isShow={popShow} 
        height='50%'
        onSetActive={setPopShow} 
        borderRadius={'10px'}
        content={content}
      />
    </div>
  )
}


export default PopUpView