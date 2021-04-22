import React, { useState, useRef } from 'react';

import Drag from '@/component/ux/Drag/index';

import './index.scss';

const DragView = () => {


  const dragBoxRef = useRef(null) || {current:{}};

  const [isMove, setIsMove] = useState(false);



  const dragBoxStyle = {
    style: {
      display: 'inline-block'
    }
  }


  const onDragStart = () => {

  }

  const onDragMove = (e) => {

  }


  const onDragEnd = () => {

  }
  



  return (

    <div className='drag-view'>


      <Drag 
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        <div ref={dragBoxRef} {...dragBoxStyle}>
          <span className='drag-btn'>dragBtn</span>
        </div>
      </Drag>
      
    </div>
  )
}


export default DragView