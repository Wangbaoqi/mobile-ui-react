

# Swiper 使用API

| 属性                 | 类型                           | 默认值 | 说明                                           |
| :------------------- | :----------------------------- | :----- | :--------------------------------------------- |
| direction            | string                         | 'left' | 滑动方向，可选值 `left`、`right`、`up`、`down` |
| height               | number \| string               | 160    | 设置轮播区域高度                               |
| activeIndex          | number                         | 0      | 当前页面的索引                                 |
| loop                 | boolean                        | false  | 是否循环                                       |
| swipeable            | boolean                        | true   | 是否支持拖拽滑动                               |
| autoPlay             | boolean                        | false  | 是否自动轮播                                   |
| autoPlayIntervalTime | number                         | 3000   | 自动轮播时间间隔，单位：毫秒                   |
| moveDistanceRatio    | number                         | 0.5    | 移动距离比例临界点                             |
| moveTimeSpan         | number                         | 300    | 移动时间跨度临界点，单位：毫秒                 |
| animationDuration    | number                         | 300    | 动画执行时间，单位：毫秒                       |
| showPagination       | boolean                        | true   | 是否显示分页器                                 |
| onChange             | (activeIndex?: number) => void | -      | 值变化时触发的回调函数                         |
| onChangeEnd          | (activeIndex?: number) => void | -      | 值变化动画结束后触发的回调函数                 |