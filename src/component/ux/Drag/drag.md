



| 属性        | 类型                                                                 | 默认值 | 说明                       |
| :---------- | :------------------------------------------------------------------- | :----- | :------------------------- |
| onDragStart | (event?: MouseEvent \| TouchEvent, dragState?: DragState) => void    | -      | 触摸/点击 起始时触发的事件 |
| onDragMove  | (event?: MouseEvent \| TouchEvent, dragState?: DragState) => boolean | -      | 拖拽移动时触发的事件       |
| onDragEnd   | (event?: MouseEvent \| TouchEvent, dragState?: DragState) => void    | -      | 触摸/点击 结束时触发的事件 |

### DragState

| 属性      | 类型   | 默认值     | 说明          |
| :-------- | :----- | :--------- | :------------ |
| startTime | Date   | new Date() | 起始时间      |
| startX    | number | -          | 起始点 x 坐标 |
| startY    | number | -          | 起始点 y 坐标 |
| offsetX   | number | -          | 横向偏移量    |
| offsetY   | number | -          | 纵向偏移量    |
