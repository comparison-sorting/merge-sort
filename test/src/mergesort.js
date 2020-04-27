import test from 'ava';
import * as mergesort from '../../src';

import util from "util" ;
import sort from "@aureooms/js-sort" ;
import array from "@aureooms/js-array" ;
import random from "@aureooms/js-random" ;
import merging from "@aureooms/js-merging" ;
import compare from "@aureooms/js-compare" ;
import functools from "@aureooms/js-functools" ;
import itertools from "@aureooms/js-itertools" ;

function all( comparename, compare, mergesortname, method, n, type ) {

	var title = util.format( "%s (new %s(%d), %s)", mergesortname, type.name, n, comparename );

	console.log( title );

test( title, t => {

		// SETUP ARRAY, DEST
		var a = new type( n );
		var b = new type( n );
		array.iota( a, 0, n, 0 );

		// SORT ARRAY
		random.shuffle( a, 0, n );
		method( compare, a, 0, n, b, 0, n );

		t.deepEqual( sort.issorted( compare , b , 0 , n ) , n , "check sorted" );
		t.deepEqual( a.length, n, "check length a" );
		t.deepEqual( b.length, n, "check length b" );

	});
};

itertools.exhaust( itertools.map(
functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star,

	[ function ( comparename, compare, mergesortname, method, n, type ) {

		if ( type.BYTES_PER_ELEMENT && n > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		all( comparename, compare, mergesortname, method, n, type );
	} ]
) ] ),
itertools.product( [

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[
	[ "recursive mergesort" , mergesort.recursive( merging.tapemerge , array.copy ) ] ,
	[ "iterative mergesort" , mergesort.iterative( merging.tapemerge , array.copy ) ]
],

[ [0] , [1] , [2] , [5] , [9] , [10] , [11] , [13] , [17] , [63] , [64] , [65] , [128] ] ,

[
	[ Array ],
	[ Int8Array ],
	[ Uint8Array ],
	[ Int16Array ],
	[ Uint16Array ],
	[ Int32Array ],
	[ Uint32Array ],
	[ Float32Array ],
	[ Float64Array ]
]

], 1 ) ) ) ;
