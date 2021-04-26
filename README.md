:dragon: [@aureooms/js-mergesort](https://make-github-pseudonymous-again.github.io/js-mergesort)
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
See [docs](https://make-github-pseudonymous-again.github.io/js-mergesort/index.html).
Parent is [aureooms/js-sort](https://github.com/make-github-pseudonymous-again/js-sort).

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

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-mergesort.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-mergesort/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-mergesort/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-mergesort/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-mergesort.svg)](https://david-dm.org/make-github-pseudonymous-again/js-mergesort)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-mergesort.svg)](https://david-dm.org/make-github-pseudonymous-again/js-mergesort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-mergesort.svg)](https://github.com/make-github-pseudonymous-again/js-mergesort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-mergesort.svg)](https://www.npmjs.org/package/@aureooms/js-mergesort)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-mergesort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mergesort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-mergesort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mergesort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-mergesort/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-mergesort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-mergesort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mergesort/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-mergesort//badge.svg)](https://make-github-pseudonymous-again.github.io/js-mergesort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-mergesort)](https://bundlephobia.com/result?p=@aureooms/js-mergesort)

## :link: Links

  - http://sorting.at
