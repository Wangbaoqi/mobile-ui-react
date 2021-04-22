import React, { memo } from 'react'

import classNames from 'classnames'
import './index.scss'

const baseClass = 'n-icon'


const Icon = ({
  name,
  dot,
  badge,
  color,
  size,
  onClick,
  tag
}) => {

  const CustomTag = tag || 'i' || 'span'

  const containerProps = {
    className: classNames(`${baseClass}__container`, [{ dot: dot || badge } ]),
  }

  const iconProps = {
    className: classNames(`${baseClass} ${baseClass}-${name}`),
    style: {
      fontSize: '20px'
    }
  }

  if(color) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        color
      }
    })
  }

  if(size) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        fontSize: size
      }
    })
  }

  if(onClick) {
    Object.assign(iconProps, {
      onClick
    })
  }

  return (
    <div {...containerProps}>
      <CustomTag {...iconProps}/>
    </div>
  )
}

export default Icon