
import React, { useRef } from 'react'
import ClassName from 'classnames'
// import './index.scss';

const basicClass = 'n-tabs';

const TabContent = ({
  curIdx,
  setCurIdx,
  children
}) => {

  const tabContentProps = {
    className: ClassName(`${basicClass}__content`)
  }

  



  return (
    <div {...tabContentProps}>

      {
        children && children.map((child, id) => {
          const active = curIdx === id;
          const activeCls = active ? 'active' : 'inactive';

          const tabPaneProps = {
            className: ClassName(`${basicClass}__pane`, [`${activeCls}`]),
            style: {
              display: active ? 'block' : 'none'
            }
        
          }
      
          return <div key={id} {...tabPaneProps}>{child.props.children}</div>
        })
      }
    </div>
  )
}

export default TabContent