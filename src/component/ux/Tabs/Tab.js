
import React, { useRef } from 'react'
import ClassNames from 'classnames';

const tabClass = 'n-tab';
const basicClass = 'n-tabs';

const Tab = ({
  idx,
  title,
  active,
  tabClick
}) => {

  const activeItem = active ? `${tabClass}__active` : '';

  const tabItemProps = {
    className: ClassNames(`${tabClass}`, [ `${activeItem}`]),
    style: {}
  }

  const tabItemTextProps = {
    className: ClassNames(`${tabClass}__text`, [])
  }

  return (
    <div {...tabItemProps} onClick={(e) => tabClick(e, idx)} data-id={idx}>
      <span {...tabItemTextProps}>{title}</span>
    </div>
  )
}

export default Tab