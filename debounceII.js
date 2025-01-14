/**
 * Implement a debounce function which accepts a callback function and a wait duration.
 * Add flush and cancel to the normal debounce function
 */
export default function debounce(func, wait) {
    let timerId = null;
    let lastArgs = null;
    let lastContext = null;

    function invoke() {
        if(timerId) {
            clearTimer();
            func.apply(lastContext, lastArgs);
        }
    }

    function clearTimer() {
        clearTimeout(timerId);
        timerId = null;
    }

    function fn (...args) {
        lastArgs = args;
        lastContext = this;
        clearTimeout(timerId);
        timerId = setTimeout(()=> {
            invoke();
        }, wait)
    }

    fn.cancel = clearTimer;
    fn.flush = invoke;

    return fn;
}