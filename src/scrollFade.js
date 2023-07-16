
document.addEventListener("scroll", () => {
  const VIEW_PORT_OFFSET = 0;
  const pageBottom       = (window.innerHeight || document.documentElement.clientHeight) + VIEW_PORT_OFFSET;

  let toFadeList = document.getElementsByClassName('fadeIn');
  for( let idx = 0; idx < toFadeList.length; ++idx ) {
    let element = toFadeList[idx];
    const elementTop = element.getBoundingClientRect().top;

    if( elementTop < pageBottom ) {
      element.classList.add('visible');
    }
  }
});