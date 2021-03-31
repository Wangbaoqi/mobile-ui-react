import React, { useRef, useEffect } from 'react';

import classNames from 'classnames';
import Icons from '@/component/ux/Icons/index'


import './index.scss';

const baseCls = 'n-popup';

// show 
// 


const PopUp = (props) => {

  const { 
    position = 'bottom',
    isShow = false, 
    content = '',
    size,
    onSetActive,
    height,
    borderRadius,
    customClass,
    closeable = true,
    closeIcon = { name: 'cross', color: '#e1514c'},
    closeIconPosition = { top: '10px', right: '10px'}
  } = props;

  const popUpRef = useRef(null) || { current: {} }

  useEffect(() => {
    document.addEventListener('click', handlePopClick, true)

    return () => {
      document.removeEventListener('click', handlePopClick, true)
    }
  })


  const containerProps = {
    className: classNames(`${baseCls}__container`, [{ isShow }, `${position}`]),
    style: {}
  }

  const popUpProps = {
    className: classNames(baseCls, [{ isShow }, `${position}`]),
    style: {}
  }

  const contentProps = {
    className: classNames(`${baseCls}__content`, [`${position}`, `${customClass}`]),
    style: {
      marginTop: ``
    }
  }

  const popCloseIcon = {
    className: classNames({
      'n-popup__close': true
    })
  }

  const handlePopClick = (e) => {
    if(popUpRef && popUpRef.current && !popUpRef.current.isSameNode(e.target)) {
      onSetActive(false)
    }
  }

  const isBorderRadius = (data) => {
    return popUpProps.className.includes(data)
  }

  if(closeable) {
    Object.assign(popCloseIcon, {
      style: {
        ...closeIconPosition
      },
      onClick: () => { onSetActive(false) }
    })
  }

  if(size) {
    Object.assign(popUpProps, {
      style: {
        ...popUpProps.style,
        width: size.width && size.height,
        height: size.height && size.height
      }
    })
  }

  if(borderRadius) {
    Object.assign(popUpProps, {
      style: {
        ...popUpProps.style,
        borderTopLeftRadius: 
        (isBorderRadius('right') || isBorderRadius('center') || isBorderRadius('bottom')) && borderRadius,
        borderTopRightRadius: 
        (isBorderRadius('left') || isBorderRadius('center') || isBorderRadius('bottom')) && borderRadius,
        borderBottomLeftRadius: 
        (isBorderRadius('right') || isBorderRadius('center') || isBorderRadius('top')) && borderRadius,
        borderBottomRightRadius: 
        (isBorderRadius('left') || isBorderRadius('center') || isBorderRadius('top')) && borderRadius,
      }
    })
  }

  if(height) {
    Object.assign(popUpProps, {
      style: {
        ...popUpProps.style,
        height: height
      }
    })
  }


  return (
    <div {...containerProps}>
      <div {...popUpProps} ref={popUpRef}>
        {
          closeable && (
            <span {...popCloseIcon}>
              <Icons name={closeIcon.name} color={closeIcon.color} />
            </span>
          )
        }
        <div {...contentProps}> 
          { content && content }
        </div>
      </div>
      
    </div>
    
  )
}

export default PopUp