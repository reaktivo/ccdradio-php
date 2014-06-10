jQuery.viewport = function() {
  if (typeof window.innerWidth === 'undefined') {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  } else {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
};
