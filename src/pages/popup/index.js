import React, { useState } from 'react'

import PopUp from '@/component/ux/Popup/index'

import './index.scss'

const PopUpView = () => {

  const [popShow, setPopShow] = useState(false);



  const clickBtn = () => {
    console.log(33);
  }

  const content = (
    <div className='pop-container'>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      <div>this is content</div>
      

      <div className='bottom-btn' onClick={() => { clickBtn() }}>Confirm</div>
    </div>
  )
  const titleStyle = {
    padding: '.7rem'
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
        height='70%'
        customTitleClass={'title-box'}
        onClose={onClosePop}
        borderRadius={'6px'}
        content={content}
      />

    </div>
  )
}


export default PopUpView