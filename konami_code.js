 ////up up down down left right left right B A
//We have an array of key codes (event.which)
//Add an event listener somewhere so that when we press this, something happens
//We need to keep track of where e are in the combo

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function onKeyDownHandler(event) {
  const key = parseInt(e.detail || e.which)
  console.log(key)
 if (tracker === code.length) {
    window.alert('You found it!')
    event.preventDefault()
    return
  }
  if (key === code[tracker]) {
    tracker++ 
    if (tracker === code.length) {
      window.alert('You found it!')
    }
  } else {
    console.log('youve messed up!!!!!')
    tracker = 0
  }
}

function init() {
  // tracker keeps track of where we are in the array
  
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

init()



// function init() {
//   //Tracker keeps track of where we are in the array
// let tracker = 0
// const body = document.querySelector('body')
// const paragraph = document.querySelector('p')

// body.addEventListener('keydown', onKeyDownHandler => {
//   if (tracker === code.length) {
//   event.preventDefault()
//   return
// }
//   if (event.which === code[tracker]) {
//     console.log('Success!')
//     tracker++
//     if (tracker === code.length -1) {
//       alert('You found it!')
//     }
    
//   } else {
//   console.log('you messed up')
//   tracker = 0
//   }
//     })
// }