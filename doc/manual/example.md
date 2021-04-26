# Examples

> More examples in [the test files](https://github.com/make-github-pseudonymous-again/js-mergesort/tree/main/test/src).


```js
let array = require( "@aureooms/js-array" ) ;
let compare = require( "@aureooms/js-compare" ) ;
let merging = require( "@aureooms/js-merging" ) ;

/** recursive mergesort */
let sort = mergesort.recursive( merging.tapemerge , array.copy ) ;

/** iterative mergesort */
let sort = mergesort.iterative( merging.tapemerge , array.copy ) ;

// for example

let random = require( "@aureooms/js-random" ) ;

let n = 10 ;
let A = array.alloc( n ) ;
let B = array.alloc( n ) ;

array.iota( A , 0 , n , 0 ) ;

A ; // [ 0 , 1 , ... , 9 ]

random.shuffle( A , 0 , n ) ;

sort( compare.increasing , A , 0 , n , B , 0 , n ) ;

B ; // [ 0 , 1 , ... , 9 ]

// or decreasing

random.shuffle( A , 0 , n ) ;

sort( compare.decreasing , A , 0 , n , B , 0 , n ) ;

B ; // [ 9 , 8 , ... , 0 ]
```
