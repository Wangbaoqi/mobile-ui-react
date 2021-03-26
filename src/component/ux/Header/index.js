import React, { useState } from 'react';
import Icons from '@/component/ux/Icons/index';
import RouteHandle from '@/routes/routeHandle';

import './index.scss';




const Header = ({location}) => {
  const routerNav = RouteHandle()
  const title = location.pathname.substr(1)

  const navigateBack = () => {
    routerNav.back()
  }

  return (
    <div className='n-nav__header'>
      <div className='n-nav__center'>
        {title}
      </div>
      <span className='n-nav__back' onClick={() => navigateBack()}>
        <Icons name={'arrow-left'} color={'#333'}/>
      </span>
    </div>
  )
}

export default Header