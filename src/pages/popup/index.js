import React, { useState } from 'react'

import PopUp from '@/component/ux/Popup/index'

import './index.scss'

const PopUpView = () => {

  const [popShow, setPopShow] = useState(false);


  const content = (
    <div className='pop-container'>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>
      <p>this is content</p>

      <div className='bottom-btn'>Confirm</div>
    </div>
  )
  const titleStyle = {
    padding: '10px'
  }


  const onClosePop = () => {
    setPopShow(false)
  }
  return (

    <div className='popup-view'>


      <button onClick={() => setPopShow(true)} >popShow</button>

      <PopUp 
        isShow={popShow}
        title={'这是标题'}
        titleStyle={titleStyle}
        height='50%'
        customTitleClass={'title-box'}
        onClose={onClosePop}
        borderRadius={'10px'}
        content={content}
      />

    </div>
  )
}


export default PopUpView