import React, { useRef, useState } from 'react'
import Gesture from 'rc-gesture';
import Tabs, {TabPane} from '@/component/ux/Tabs/index'

import './index.scss';

const TabView = () => {

  let refSwiper = useRef(null) || {current: {}};

  const [tabIdxBasic, setTabIdBasic] = useState(0);
  const [tabIdxLink, setTabIdxLink] = useState(0);
  const [tabIdxScroll, setTabIdxScroll] = useState(0);
  const [tabIdxSwipe, setTabIdxSwipe] = useState(0);

  const tabList_basic = [{
    title: '哈哈哈哈'
  },{
    title: '顶顶顶顶'
  },{
    title: '额鹅鹅鹅'
  }]

  const tabList_link = [{
    title: '哈哈哈哈'
  },{
    title: '顶顶顶顶'
  },{
    title: '额鹅鹅鹅'
  }]

  const tabList_scroll = [{
    title: '哈哈哈哈'
  },{
    title: '顶顶顶顶'
  },{
    title: '额鹅鹅鹅'
  },{
    title: '柔柔弱弱'
  },{
    title: '吞吞吐吐'
  },{
    title: '呜呜呜呜'
  },{
    title: '凄凄切切'
  }]

  const tabList_swipe = [{
    title: '哈哈哈哈'
  },{
    title: '顶顶顶顶'
  },{
    title: '额鹅鹅鹅'
  },{
    title: '柔柔弱弱'
  },{
    title: '吞吞吐吐'
  },{
    title: '呜呜呜呜'
  },{
    title: '凄凄切切'
  }]

  const setCurIdxBasic = (e, id) => {
    setTabIdBasic(id)
  }
  const setCurIdxLink = (e, id) => {
    setTabIdxLink(id)
  }
  const setCurIdxScroll = (e, id) => {
    setTabIdxScroll(id)
  }
  const setCurIdxSwipe = (e, id) => {
    setTabIdxSwipe(id)
  }



  const moveSwiper = (e, arg) => {
    const { srcEvent, moveStatus } = e;
    const { x, y } = moveStatus;

    refSwiper.current.style.transform = `translateX(${x}px)`;

    srcEvent.preventDefault();
    // console.log(e, arg, 'moveSwiper');
  }

  const resetSwiper = () => {
    refSwiper.current.style.transform = `translateX(0px)`;
  }

  return (
    <div className='tab-view'> 
      
      <h2 className='tab-title'>基本使用</h2>

      <Tabs 
        tabs={tabList_basic}
        curIdx={tabIdxBasic} 
        setCurIdx={setCurIdxBasic} 
        >
          <TabPane >
            4411
          </TabPane>
          <TabPane >
            4422
          </TabPane>
          <TabPane >
            4433
          </TabPane>
      </Tabs>

      <h2 className='tab-title'>自定义线条宽度</h2>

      <Tabs 
        tabs={tabList_link}
        curIdx={tabIdxLink} 
        setCurIdx={setCurIdxLink} 
        lineWidth={36}
        >
          <TabPane >
            4411
          </TabPane>
          <TabPane >
              4422
          </TabPane>
          <TabPane >
              4433
          </TabPane>
      </Tabs>

      <h2 className='tab-title'>标签栏滚动</h2>

      <Tabs 
        tabs={tabList_scroll}
        curIdx={tabIdxScroll} 
        setCurIdx={setCurIdxScroll} 
        lineWidth={36}
        scrollAble={true}
        >
          <TabPane >
            4411
          </TabPane>
          <TabPane >
            4422
          </TabPane>
          <TabPane >
            4433
          </TabPane>
          <TabPane >
            4444
          </TabPane>
          <TabPane >
            4455
          </TabPane>
          <TabPane >
            4466
          </TabPane>
          <TabPane >
            4477
          </TabPane>
      </Tabs>

      <h2 className='tab-title'>panne滑动</h2>

      <Tabs 
        tabs={tabList_swipe}
        curIdx={tabIdxSwipe}
        setCurIdx={setCurIdxSwipe} 
        lineWidth={36}
        scrollAble={true}
        swipeAble={true}
        >
          <TabPane >
            4411
          </TabPane>
          <TabPane >
            4422
          </TabPane>
          <TabPane >
            4433
          </TabPane>
          <TabPane >
            4444
          </TabPane>
          <TabPane >
            4455
          </TabPane>
          <TabPane >
            4466
          </TabPane>
          <TabPane >
            4477
          </TabPane>
      </Tabs>




      <div className='test rc'>
        <Gesture 
          direction={'horizontal'}
          onPanMove={ (e, args) => { moveSwiper(e, args); } }
          onPanEnd={ () => { resetSwiper(); } }
          onTouchMove={ (e) => { console.log('still run touch move'); } }
        >

          <div style={{ height: '200px', background: 'red'}}>
            <div className='swiper' ref={refSwiper}>
              container1container
            </div>
          </div>
        </Gesture>

      </div>
    </div>




    
  )
}

export default TabView