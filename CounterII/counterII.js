/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let counter = init
    //return object with 3 functions
    return ({
        //increases count when called
        increment: () => {
            counter++
            return counter
        },
        //decreases count when called
        decrement: () => {
            counter--
            return counter
        },
        //reverts count to inital integer
        reset: () => {
            counter = init
            return counter
        }
    })
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
