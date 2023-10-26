/**
 * @param {number} n
 * @return {Function} counter
 */
//description of problem makes it seem way more confusing with the [calls] array
//actually just a simple incrementation
var createCounter = function (n) {
    return function counter() {
        return n++
  }
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
