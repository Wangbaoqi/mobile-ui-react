import React from "react";
import Header from "@/component/ux/Header/index";
import RouteView from '@/routes/routeView';

import './layout.scss';

const Layout = (props) => {
  console.log(props, 'layout');


  return (
    <div className="layout">
      {
        props && props.location && props.location.pathname.indexOf('/index') == -1 ? 
         <Header {...props}/> : ''
      }
      <RouteView {...props}/>

    </div>
  );
};

export default Layout;
