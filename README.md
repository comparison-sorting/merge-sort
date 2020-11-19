:dragon: [@aureooms/js-mergesort](https://aureooms.github.io/js-mergesort)
==

<p align="center">
<a href="https://idea-instructions.com/merge-sort">
<img src="https://idea-instructions.com/merge-sort.png" width="600"/>
</a><br/>
<i>IDEA Instructions</i>
developed by
<a href="https://www.ibr.cs.tu-bs.de/users/fekete">Sándor P. Fekete</a>
and
<a href="https://morr.cc">Sebastian Morr</a>.
</p>

Mergesort library for JavaScript.
See [docs](https://aureooms.github.io/js-mergesort/index.html).
Parent is [aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
import * as array from '@aureooms/js-array' ;
import * as merging from '@aureooms/js-merging' ;
import * as mergesort from '@aureooms/js-mergesort' ;

const sort = mergesort.recursive( merging.tapemerge , array.copy ) ;

let data = [ /*...*/ ] ;
let a = data.slice();
let b = new Array(data.length) ;

import { increasing } from '@aureooms/js-compare' ;
sort(increasing, a, 0, a.length, b, 0, b.length) ;

import { issorted } from '@aureooms/js-sort' ;
issorted(increasing, b, 0, b.length) ; // true
```

[![License](https://img.shields.io/github/license/aureooms/js-mergesort.svg)](https://raw.githubusercontent.com/aureooms/js-mergesort/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)
[![Build](https://img.shields.io/travis/aureooms/js-mergesort/main.svg)](https://travis-ci.org/aureooms/js-mergesort/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-mergesort.svg)](https://david-dm.org/aureooms/js-mergesort)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-mergesort.svg)](https://david-dm.org/aureooms/js-mergesort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-mergesort.svg)](https://github.com/aureooms/js-mergesort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-mergesort/main.svg)](https://codecov.io/gh/aureooms/js-mergesort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-mergesort.svg)](https://codeclimate.com/github/aureooms/js-mergesort/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-mergesort//badge.svg)](https://aureooms.github.io/js-mergesort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-mergesort)](https://bundlephobia.com/result?p=@aureooms/js-mergesort)

## :link: Links

  - http://sorting.at
