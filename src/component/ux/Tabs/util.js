
import raf from 'raf';



const getTransformPropValue = (v) => {
  return {
    transform: v,
    MozTransform: v,
    WebkitTransform: v
  }
}



const getPxStyle = (value='', unit='px') => {
  value = `${value}${unit}, 0px, 0px`
  return `translate3d(${value})`;
}



const getScrollLeft = (el) => {

  return el.scrollLeft
}

let scrollRaf = 0;
let scrollList = []

const tabScrollTo = (scrollContainer, left = 0, top = 0, duration = 0) => {

  let fromLeft = 0;
  let count = 0;

  if(scrollList[scrollRaf] == scrollContainer) {
    // console.log('cancel');
    raf.cancel(scrollRaf)
  }

  if(scrollContainer == window) {

  }else {
    fromLeft = getScrollLeft(scrollContainer);
  }

  const frame = duration === 0 ? 1 : Math.round((1000 * duration) / 16);

  function animate() { 
    if(scrollContainer === window) {

    }else {
      scrollContainer.scrollLeft += (left - fromLeft) / frame;
    }
    count += 1;
    if(count < frame) {
      // console.log(count, 'count');
      scrollRaf = raf(animate);
      scrollList[scrollRaf] = scrollContainer;
    }
    // console.log(left, fromLeft, frame, scrollContainer.scrollLeft, 'left');

  }
  // parseInt(getComputedStyle(scrollContainer).getPropertyValue('padding-left'))

  animate()
}


export {
  getTransformPropValue,
  getPxStyle,

  tabScrollTo
}
