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
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>
      <p>ppppp</p>

      <div dangerouslySetInnerHTML={{__html: 'First <p>html</p> Second'}}></div>
    </div>
  )
  return (

    <div className='popup-view'>


      <button onClick={() => setPopShow(true)} >popShow</button>

      <PopUp 
        isShow={popShow}
        height='30%'
        onSetActive={setPopShow}
        borderRadius={'10px'}
        content={content}
      />
    </div>
  )
}


export default PopUpView