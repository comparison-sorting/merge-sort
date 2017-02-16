[js-mergesort](http://aureooms.github.io/js-mergesort)
==

Mergesort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
let sort = mergesort.recursive( merging.tapemerge , array.copy ) ;
```

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-mergesort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-mergesort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-mergesort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-mergesort)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-mergesort.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-mergesort)
[![Build Status](http://img.shields.io/travis/aureooms/js-mergesort.svg?style=flat)](https://travis-ci.org/aureooms/js-mergesort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-mergesort.svg?style=flat)](https://coveralls.io/r/aureooms/js-mergesort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-mergesort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-mergesort.svg?style=flat)](https://david-dm.org/aureooms/js-mergesort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-mergesort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-mergesort)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-mergesort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-mergesort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-mergesort.svg?style=flat)](https://github.com/aureooms/js-mergesort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-mergesort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-mergesort)


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-mergesort
# or
jspm install npm:@aureooms/js-mergesort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-mergesort
```

### bower
```terminal
bower install @aureooms/js-mergesort
```

### ender
```terminal
ender add @aureooms/js-mergesort
```

### jam
```terminal
jam install @aureooms/js-mergesort
```

### spm
```terminal
spm install @aureooms/js-mergesort --save
```

### npm
```terminal
npm install @aureooms/js-mergesort --save
```

## Require
### jspm
```js
let mergesort = require( "github:aureooms/js-mergesort" ) ;
// or
import mergesort from '@aureooms/js-mergesort' ;
```
### duo
```js
let mergesort = require( "aureooms/js-mergesort" ) ;
```

### component, ender, spm, npm
```js
let mergesort = require( "@aureooms/js-mergesort" ) ;
```

### bower
The script tag exposes the global variable `mergesort`.
```html
<script src="bower_components/@aureooms/js-mergesort/js/dist/mergesort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-mergesort" ] , function ( mergesort ) { ... } ) ;
```


## Use

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

## Reference

  - http://sorting.at
