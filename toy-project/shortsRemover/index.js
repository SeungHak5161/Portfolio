// window.addEventListener('load', () => {
//   console.log('dom loaded')
//   // const target = document.getElementsByTagName('ytd-item-section-renderer')[1];
//   const elem = document.getElementsByTagName('ytd-reel-shelf-renderer')
//   if (elem) {
//     console.log(elem)
//     elem.parentNode.removeChild(elem)
//   }
// })

const timeOut = setInterval(() => {
  const target = document.getElementsByTagName('ytd-reel-shelf-renderer')
  if (target.length !== 0) {
    target[0].remove()
    // clearInterval(timeOut)
  }
}, 100);