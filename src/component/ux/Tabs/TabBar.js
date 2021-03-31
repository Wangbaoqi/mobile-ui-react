import React, { useState, useRef, useEffect } from "react";

import ClassNames from 'classnames';
import Tab from './Tab';
const tabClass = 'n-tab';
const basicClass = 'n-tabs';


const TabBar = ({ scrollAble=false, curIdx=0, tabList=[], rate, setCurIdx }) => {
  const tabNavRef = useRef(null) || { current: {} };

  useEffect(() => {
    console.log(tabNavRef.current, "tabNavRef");
  }, [tabList]);

  const tabsWrapProps = {
    className: ClassNames(`${basicClass}__wrap`, []),
    style: {},
  };

  const tabsNavProps = {
    className: ClassNames(`${basicClass}__nav ${basicClass}__nav--line`, [
      { [`${basicClass}__nav--scrollable`]: scrollAble },
    ]),
    style: {},
  };

  const tabItemLineProps = {
    className: ClassNames(`${tabClass}__line`),
    style: {
      transitionDuration: "0.3s",
    },
  };

  return (
    <div {...tabsWrapProps}>
      <div {...tabsNavProps} ref={tabNavRef}>
        {tabList.map((e, id) => {
          // tabItemLineProps.style.transform = `translateX(${})`

          return (
            <Tab
              key={id}
              idx={id}
              title={e.title}
              active={id === curIdx}
              tabClick={setCurIdx}
            />
          );
        })}
        <div {...tabItemLineProps}></div>
      </div>
    </div>
  );
};

export default TabBar;
