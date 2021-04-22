import React, { useState, useRef, cloneElement } from 'react';


import './index.scss';




const Drag = ({
  startTime,
  startX,
  startY,
  offsetX,
  offsetY,
  onDragStart,
  onDragMove,
  onDragEnd,
  children
}) => {

  let dragState = {};
  let curX = 0;
  let curY = 0;

  const onTouchStart = (e) => {
    console.log(e.clientX, 'touch-start');
    dragState.startTime = new Date();

    if(isTouchEvent(e)) {
      dragState.startX = e.clientX;
      dragState.startY = e.clientY;
      

    }
  }

  const onTouchMove = () => {

    console.log('ee');
  }

  const onTouchEnd = () => {}




  const isTouchEvent = (e) => {
    if(!e || typeof e !== 'object') throw new TypeError(`${e} isn't a touch event`);
    return !('touches' in e);
  }



  return cloneElement(children, {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onMouseDown: onTouchStart,
    onMouseMove: onTouchMove,
    onMouseUp: onTouchEnd,
  })
}

export default Drag