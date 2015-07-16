'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/_iterative.js */

		var _iterative = function _iterative(merge, copy) {

			/**
    * Always makes at most A001855(n) comparisons.
    *
    */

			var sort = function sort(compare, a, ai, aj, b, bi) {

				var whole = undefined,
				    left = undefined,
				    center = undefined,
				    right = undefined,
				    mask = undefined,
				    half = undefined;
				var i = undefined,
				    j = undefined,
				    k = undefined;
				var t = undefined,
				    u = undefined,
				    v = undefined,
				    w = undefined,
				    p = undefined;
				var q = undefined,
				    r = undefined,
				    s = undefined;
				var c = undefined;

				whole = aj - ai;

				left = 0;
				center = 2;
				right = 0;

				mask = 1;
				half = 1;

				while (half < whole) {

					// assert  left < center
					// assert right < center

					if (left === 0) {

						// assert right = 0

						t = u = v = w = p = 0;

						j = whole;
						i = left = j & mask;

						q = ai;
						r = q + left;
						s = bi;
					} else {

						if (right === 0) {

							t = ai;
							u = ai + left;
							v = u;
							w = u + half;
							p = bi;

							left += half;
							i = left;

							right = whole - left & mask;
							j = whole - right;

							r = aj;
						} else {

							t = ai;
							u = ai + left;
							v = aj - right;
							w = aj;
							p = bi;

							i = left;
							left += right;

							j = whole - right;
							r = ai + j;
							right = whole - left & mask;
							j -= right;
						}

						q = ai + j;
						s = bi + whole - right;
					}

					merge(compare, a, t, u, a, v, w, b, p);

					copy(a, q, r, b, s);

					for (k = i; k < j; k += center) {

						t = ai + k;
						u = t + half;
						v = t + center;

						merge(compare, a, t, u, a, u, v, b, bi + left + k - i);
					}

					c = a;
					a = b;
					b = c;

					aj = bi + whole;
					bi = ai;
					ai = aj - whole;

					mask |= center;
					half <<= 1;
					center <<= 1;
				}

				return a;
			};

			return sort;
		};

		exports._iterative = _iterative;

		/* js/src/_recursive.js */

		var _recursive = function _recursive(merge) {

			/**
    * if n = 2^k then
    *    input is in a if k is odd
    *    input is in b if k is even
    * otherwise input is in both a and b
    * output is in b
    */

			var sort = function sort(compare, a, ai, aj, b, bi, bj) {

				if (aj - ai < 2) return;

				var p = Math.floor((ai + aj) / 2);

				sort(compare, b, bi, bi + p - ai, a, ai, p);
				sort(compare, b, bi + p - ai, bj, a, p, aj);

				merge(compare, a, ai, p, a, p, aj, b, bi);
			};

			return sort;
		};

		exports._recursive = _recursive;

		/* js/src/iterative.js */

		var iterative = function iterative(merge, copy) {

			var sort = _iterative(merge, copy);

			return function (compare, a, ai, aj, b, bi, bj) {

				if (sort(compare, a, ai, aj, b, bi) !== b) {
					copy(a, ai, aj, b, bi);
				}
			};
		};

		exports.iterative = iterative;

		/* js/src/linkedlist */
		(function (exports) {

			/* js/src/linkedlist/recursive.js */

			var recursive = function recursive(merge) {

				var sort = function sort(compare, head, size) {

					// Handle the base case.
					if (size < 2) return head;

					var m = size / 2 | 0;
					var n = size - m;

					var a = head,
					    b = head;

					// Search the middle element.
					for (var _m = m; _m; --_m) {
						b = b.next;
					} // Sort the two sublists.
					// a and b are the heads
					// of the sorted sublists
					a = sort(compare, a, m);
					b = sort(compare, b, n);

					// Merge the two sublists
					// and return the new head.
					return merge(compare, a, m, b, n);
				};

				return sort;
			};

			exports.recursive = recursive;
		})(exports['linkedlist'] = {});
		/* js/src/recursive.js */

		var recursive = function recursive(merge, copy) {

			var sort = _recursive(merge);

			return function (compare, a, ai, aj, b, bi, bj) {

				var n = aj - ai;
				var k = 0;

				while (n > 0 && (n & 1) === 0) {
					n >>>= 1;
					++k;
				}

				if (n === 1) {

					if (k & 1) {
						sort(compare, a, ai, aj, b, bi, bj);
					} else {
						sort(compare, b, bi, bj, a, ai, aj);
						copy(a, ai, aj, b, bi);
					}
				} else {
					copy(a, ai, aj, b, bi);
					sort(compare, a, ai, aj, b, bi, bj);
				}
			};
		};

		exports.recursive = recursive;

		return exports;
	};
	if (typeof exports === 'object') {
		definition(exports);
	} else if (typeof define === 'function' && define.amd) {
		define('aureooms-js-mergesort', [], function () {
			return definition({});
		});
	} else if (typeof window === 'object' && typeof window.document === 'object') {
		definition(window['mergesort'] = {});
	} else console.error('unable to detect type of module to define for aureooms-js-mergesort');
})();