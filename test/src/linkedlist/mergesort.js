
var util = require( "util" );
var sll = require( "@aureooms/js-sll" );
var sort = require( "@aureooms/js-sort" );
var array = require( "@aureooms/js-array" );
var merging = require( "@aureooms/js-merging" );
var compare = require( "@aureooms/js-compare" );
var functools = require( "@aureooms/js-functools" );
var itertools = require( "@aureooms/js-itertools" );

var all = function( comparename, compare, mergesortname, method, n ) {

	var title = util.format( "%s (%d, %s)", mergesortname , n, comparename );

	console.log( title );

	test( title, function () {

		// SETUP ARRAY, DEST
		var a = array.alloc( n );
		array.fillfn( a, 0, n, Math.random );
		var A = sll.list( a ) ;

		A = method( compare , A , n ) ;

		var b = itertools.list( sll.iter( A ) ) ;

		deepEqual( sort.issorted( compare , b , 0 , n ) , n , "check sorted" );
		deepEqual( a.length, n, "check length a" );
		deepEqual( b.length, n, "check length b" );

	});
};

itertools.exhaust( itertools.map(
functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star,

	[ function ( comparename, compare, mergesortname, method, n ) {

		all( comparename, compare, mergesortname, method, n );

	} ]
) ] ),
itertools.product( [

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[
	[ "recursive mergesort (linked lists)" , mergesort.linkedlist.recursive( merging.nodes ) ] ,
],

[ [0] , [1] , [2] , [5] , [9] , [10] , [11] , [13] , [17] , [63] , [64] , [65] , [128] ]

], 1 ) ) ) ;
