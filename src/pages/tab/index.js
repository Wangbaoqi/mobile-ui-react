import React, { useRef, useState } from 'react'

import Tabs, {TabPane} from '@/component/ux/Tabs/index'


const TabView = () => {


  const [tabIdx, setTabId] = useState(0);

  const tabList = [{
    title: 'item1'
  },{
    title: 'item2'
  },{
    title: 'item3'
  },{
    title: 'item4'
  },{
    title: 'item5'
  },{
    title: 'item6'
  },{
    title: 'item7'
  }]

  const setCurIdx = (e, id) => {
    // console.log(e, id, 'ids');
    // activeId = id
    setTabId(id)
  }

  return (
    <div className='tab-view'>
      tab

      <Tabs tabs={tabList} curIdx={tabIdx} setCurIdx={setCurIdx}>
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
    </div>
  )
}

export default TabView