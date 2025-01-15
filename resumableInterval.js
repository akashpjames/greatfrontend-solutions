/**
 * Implement a function createResumableInterval, that acts like setInterval and has the exact same signature.
 * However instead of returning a timer ID, it returns an object that contains three methods:
 *
 * start: Runs the callback immediately and every delay milliseconds.
 * pause: Pauses the interval so that it stops running. Execution can be resumed by calling start() again.
 * stop: Stops the interval permanently, cannot be restarted.
 */
export default function createResumableInterval(callback, delay, ...args) {
    let timerId = null;
    let stopped = false;

    function start() {
        if(stopped || timerId != null) return;
        callback(...args);
        timerId = setInterval(() => {
            callback(...args);
        }, delay);
    }

    function clearTimer() {
        clearInterval(timerId);
        timerId = null;
    }

    function pause() {
        if(stopped) return;
        clearTimer();
    }
    function stop() {
        stopped = true;
        clearTimer();
    }

    return {
        start,
        pause,
        stop
    }
}