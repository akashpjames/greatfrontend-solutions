/*
Implement throttle
let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
throttledIncrement(); // i = 1

// t = 50: Call throttledIncrement() again.
//  i is still 1 because 100ms have not passed.
throttledIncrement(); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
//  i can be incremented because it has been more than 100ms
//  since the last throttledIncrement() call at t = 0.
throttledIncrement(); // i = 2
*/

export default function throttle(func, wait) {
  const canRunNow = true;
  return function(...args) {
    if(!canRunNow) {
      return;
    } 
    canRunNow = false;
    func.call(this, ...args);
    setTimeout(() => {
      canRunNow = true;
    }, wait)
  }
}
