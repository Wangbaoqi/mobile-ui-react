import React, { useRef, useState, useEffect } from 'react';
import ClassNames from 'classnames';

import { 
  getTransformPropValue, 
  getPxStyle,
  tabScrollTo
} from './util';
import Tab from "./Tab";
import TabContent from "./TabContent";
import TabPane from "./TabPane";



import './index.scss';


const basicClass = 'n-tabs';
const tabClass = 'n-tab';


const Tabs = (
  {
    curIdx,
    tabs,
    scrollAble = true,
    setCurIdx,
    children
  }
) => {

  Tabs.TabPane = TabPane;

  const tabNavRef = useRef(null) || { current: {} };
  const tabLineRef = useRef(null) || { current: {} };

  const [tabWidth, setTabWidth] = useState('0');

  const rate = 100 / tabs.length


  useEffect(() => {
    // updateTabIndicator(tabNavRef, tabLineRef, curIdx)
    calculateLineWidth(tabNavRef.current);
    calculateScrollLeftLocation(tabNavRef.current);
  }, [tabs])


  const calculateLineWidth = (tabNavEl) => {
    if(!scrollAble) return;
    const el = tabNavEl.children[curIdx];
    const size = computedStyle(el, 'width');
    setTabWidth(parseInt(size, 10));
  }

  const calculateScrollLeftLocation = (tabNavEl) => {
    if(!scrollAble) return;
    const index = curIdx - 1 >= 0 ? curIdx - 1 : 0;
    const prevTabItem = tabNavEl.children[index];
    if(scrollAble && tabNavEl && prevTabItem) {
      const { offsetLeft = 0 } = prevTabItem;
      tabScrollTo(tabNavEl, offsetLeft, 0, 0.3);
    }
  }

  const calculateLineWidthPosition = (tabNavEl) => {
    const childCount = children.length;
    let pos = 100 * curIdx;
    if(scrollAble && tabNavEl) {
      // 可滑动
      const el = tabNavEl.children[curIdx];
      const { offsetLeft = 0, offsetTop = 0 } = el;
      pos = offsetLeft
    }

    const size = scrollAble ? `${tabWidth}px` : `${100/childCount}%`;
    const transformStyle = scrollAble 
        ? getPxStyle(pos, 'px')
        : getPxStyle(pos, '%');

    const styleUI = getTransformPropValue(transformStyle);
    const itemStyle = {width: `${size}`}
    return {
      ...styleUI,
      ...itemStyle
    }
    
  }

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

  let tabItemLineProps = {
    className: ClassNames(`${tabClass}__line`),
    style: {
      ...calculateLineWidthPosition(tabNavRef.current),
      transitionDuration: "0.3s",
    },
  };


  const tabsProps = {
    className: ClassNames(`${basicClass}__container`, []),
    style: {}
  }


  
  

  // useEffect(() => {
  //   console.log(tabNavRef.current, "tabNavRef");
  // }, [tabs]);


  



  /******* */

  /**
   * 计算元素尺寸
   * @param {*} el 
   * @param {*} prop 
   * @returns 
   */
  const computedStyle = (el, prop) => {
    let value = '0';
    if(prop in el.style) {
      value = el.style[prop] || getComputedStyle(el).getPropertyValue(prop) || '0';
    }
    return value;
  }




  /******* */


  
  const updateTabIndicator = (tabNavRef, tabLineRef, curIdx) => {
    const tabItem = tabNavRef.current.querySelector(`[data-id="${curIdx}"]`)
    const tabItemPos = tabItem.getBoundingClientRect();
    const tabBarPos = tabNavRef.current.getBoundingClientRect();

    Object.assign(tabItemLineProps, {
      style: {
        width: `${tabItem.clientWidth}px`,
        transform: `transitionX(${tabItemPos.left - tabBarPos.left})px`
      }
    })
    tabLineRef.current.style.width = `${tabItem.clientWidth}px`;
    tabLineRef.current.style.left = `${tabItemPos.left - tabBarPos.left}px`

    console.log(tabLineRef.current.style.transform);

  }


  return (

    <div {...tabsProps}>
      
      <div {...tabsWrapProps}>
        <div {...tabsNavProps} ref={tabNavRef}>
          {tabs.map((e, id) => {
            // tabItemLineProps.style.transform = `translateX(${})`
            // if(id == curIdx) {
            //   deviate = rate * id
            //   tabItemLineProps.style.width = `${rate}%`
            //   tabItemLineProps.style.left = `${deviate}%`


            // }
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
          <div {...tabItemLineProps} ref={tabLineRef}></div>
        </div>
      </div>
      <TabContent 
        children={children}
        curIdx={curIdx}
        setCurIdx={setCurIdx}
      />
    </div>
  )



}

export default Tabs