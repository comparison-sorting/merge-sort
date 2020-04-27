[js-mergesort](http://aureooms.github.io/js-mergesort)
==

<img src="https://idea-instructions.com/merge-sort.png" width="864"/>

Mergesort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
let sort = mergesort.recursive( merging.tapemerge , array.copy ) ;
```

[![License](https://img.shields.io/github/license/aureooms/js-mergesort.svg)](https://raw.githubusercontent.com/aureooms/js-mergesort/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)
[![Build](https://img.shields.io/travis/aureooms/js-mergesort/master.svg)](https://travis-ci.org/aureooms/js-mergesort/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-mergesort.svg)](https://david-dm.org/aureooms/js-mergesort)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-mergesort.svg)](https://david-dm.org/aureooms/js-mergesort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-mergesort.svg)](https://github.com/aureooms/js-mergesort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-mergesort/master.svg)](https://codecov.io/gh/aureooms/js-mergesort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/trends/technical_debt)
[![Documentation](http://aureooms.github.io/js-mergesort//badge.svg)](http://aureooms.github.io/js-mergesort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-mergesort)](https://bundlephobia.com/result?p=@aureooms/js-mergesort)


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
