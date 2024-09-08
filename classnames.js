/*
Implement Classnames
classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
classNames('a', ['b', { c: true, d: false }]); // 'a b c'
classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'
classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
*/

/**
Note: 
Ask if there how to handle if duplicate classnames occur like foo foo?
What if a class was true first and then false later? {foo: true}, {foo: false} ? Should we remove foo?
There is a possibility of stack overflow with recursion - this is applicable to all recursive solutions.
There is a possibility of circular references for arrays and objects. This is applicable to any input which has arbitrary depth.
*/

export default function classNames(...args) {
    const classes = [];
  
    args.forEach(current => {
      if(current && typeof current === 'string') {
        classes.push(current);
      } else if(Object.prototype.toString.call(current) === '[object Object]') {
        Object.keys(current).forEach(key => {
          if(current[key]) {
            classes.push(key);
          }
        })
  
      } else if(Array.isArray(current)) {
        current.forEach(element => {
          if(classNames(element)) {
            classes.push(classNames(element));
          }
        })
        // classes.push(classNames(...arg));
      } else if(current && typeof current === 'number') {
        classes.push(current);
      }
    })
    
    return classes.join(' ');
  }

  export default function classNames(...args) {
    const classes = [];
  
    args.forEach((arg) => {
      // Ignore falsey values.
      if (!arg) {
        return;
      }
  
      const argType = typeof arg;
  
      // Handle string and numbers.
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
        return;
      }
  
      // Handle arrays.
      if (Array.isArray(arg)) {
        classes.push(classNames(...arg));
        return;
      }
  
      // Handle objects.
      if (argType === 'object') {
        for (const key in arg) {
          // Only process non-inherited keys.
          if (Object.hasOwn(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
  
        return;
      }
    });
  
    return classes.join(' ');
  }