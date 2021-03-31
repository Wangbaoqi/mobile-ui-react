




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


const tabScrollTo = (scrollContainer, left = 0, top = 0, duration = 0) => {

  let fromLeft = 0;

  if(scrollContainer == window) {

  }else {
    fromLeft = getScrollLeft(scrollContainer);
  }

  const frame = duration === 0 ? 1 : Math.random((1000 * duration) / 16);

  function animate() { 
    if(scrollContainer === window) {

    }else {
      scrollContainer.scrollLeft += (left - fromLeft) / frame;
    }
  }
  // parseInt(getComputedStyle(scrollContainer).getPropertyValue('padding-left'))

  animate()
}


export {
  getTransformPropValue,
  getPxStyle,

  tabScrollTo
}
