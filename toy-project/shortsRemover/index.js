// window.onload = () => {
//   // const target = document.getElementsByTagName('ytd-item-section-renderer')[1];
//   const elem = document.getElementsByClassName('ytd-reel-shelf-renderer')[0]
//   const target = elem.parentNode;
//   if (elem) {
//     console.log('remove shorts')
//     target.parentNode.removeChild(target)
//   } else {
//     setTimeout(() => {
//       const elem = document.getElementsByClassName('ytd-reel-shelf-renderer')[0]
//       const target = elem.parentNode;
//       console.log('delayed remove')
//       target.parentNode.removeChild(target)
//     }, 3000);
//   }
// }

const timeOut = setInterval(() => {
  const elem = document.getElementsByClassName('ytd-reel-shelf-renderer')[0]
  if (elem) {
    const target = elem.parentNode
    console.log('remove shorts')
    target.parentNode.removeChild(target)
    clearInterval(timeOut)
  } else {
    console.log('shorts not found')
  }
}, 100);