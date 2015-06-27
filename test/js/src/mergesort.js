var all, util, array, random, compare, functools, itertools ;

util = require( "util" );
array = require( "aureooms-js-array" );
random = require( "aureooms-js-random" );
compare = require( "aureooms-js-compare" );
functools = require( "aureooms-js-functools" );
itertools = require( "aureooms-js-itertools" );

all = function( comparename, compare, mergesortname, method, n, type ) {

	var title = util.format( "%s (new %s(%d), %s)", mergesortname, type.name, n, comparename );

	console.log( title );

	test( title, function () {

		// SETUP ARRAY, DEST
		var a = new type( n );
		var b = new type( n );
		array.iota( a, 0, n, 0 );

		// SORT ARRAY
		random.shuffle( a, 0, n );
		method( compare, a, 0, n, b, 0, n );

		deepEqual( sort.issorted( compare , b , 0 , n ) , n , "check sorted" );
		deepEqual( a.length, n, "check length a" );
		deepEqual( d.length, n, "check length d" );

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
	[ "recursive mergesort", merging.recursive( merging.tapemerge , array.copy ) ] ,
	[ "iterative mergesort" , merging.iterative( merging.tapemerge , array.copy ) ]
],

[ [0] , [1] , [2] , [5] , [9] , [10] , [11] , [13] , [17] , [63] , [64] , [65] ] ,

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
