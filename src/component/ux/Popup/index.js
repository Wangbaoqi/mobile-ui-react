import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icons from '@/component/ux/Icons/index';

import './index.scss';

const baseCls = 'n-popup';

const safeAreaIBottom = 'safe-area-inset-bottom'

const PopUp = ({ 
  position = 'bottom',
  isShow = false, 
  title = '',
  titlePosition = 'left',
  content = '',
  onClose,
  height,
  borderRadius,
  titleStyle = {},
  safeAreaInsetBottom = true,
  closeable = true,
  closeIcon = { name: 'cross', color: '#e1514c'},
  closeIconPosition = { top: '10px', right: '10px'}
}) => {

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
    className: classNames(baseCls, {[`${safeAreaIBottom}`]: safeAreaInsetBottom}, [{ isShow }, `${position}` ]),
    style: {}
  }

  const titleBarProps = {
    className: classNames(`${baseCls}__title`),
    style: {
      textAlign: titlePosition
    }
  }

  const contentProps = {
    className: classNames(`${baseCls}__content`, [`${position}`]),
    style: {
      
    }
  }

  const popCloseIcon = {
    className: classNames({
      'n-popup__close': true
    })
  }

  const handlePopClick = (e) => {
    if(popUpRef && popUpRef.current && !popUpRef.current.isSameNode(e.target)) {
      onClose && onClose()
    }
  }

  const isBorderRadius = (data) => {
    return popUpProps.className.includes(data)
  }


  if(titleStyle) {
    Object.assign(titleBarProps, {
      style: {
        ...titleBarProps.style,
        ...titleStyle
      }
    })
  }

  if(closeable) {
    Object.assign(popCloseIcon, {
      style: {
        ...closeIconPosition
      },
      onClick: () => { onClose() }
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
        <div {...titleBarProps}>
          {title}
        </div>
        <span {...popCloseIcon}>
          <Icons name={closeIcon.name} color={closeIcon.color} />
        </span>
        <div {...contentProps}> 
          { content && content }
        </div>
      </div>
    </div>
  )
}

PopUp.propTypes = {
  position: PropTypes.string,
  isShow: PropTypes.bool, 
  content: PropTypes.object,
  onClose: PropTypes.func,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  customClass: PropTypes.string,
  closeable: PropTypes.bool,
  closeIcon: PropTypes.object,
  closeIconPosition: PropTypes.object
}

export default PopUp