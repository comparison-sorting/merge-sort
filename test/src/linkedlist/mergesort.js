import test from 'ava';
import * as mergesort from '../../../src';

import util from "util" ;
import sll from "@aureooms/js-sll" ;
import * as sort from "@aureooms/js-sort" ;
import * as array from "@aureooms/js-array" ;
import merging from "@aureooms/js-merging" ;
import * as compare from "@aureooms/js-compare" ;
import functools from "@aureooms/js-functools" ;
import * as itertools from "@aureooms/js-itertools" ;

const all = function( comparename, compare, mergesortname, method, n ) {

	const title = util.format( "%s (%d, %s)", mergesortname , n, comparename );

	test( title, t => {

		// SETUP ARRAY, DEST
		const a = array.alloc( n );
		array.fillfn( a, 0, n, Math.random );
		const A = sll.list( a ) ;
		const B = method( compare , A , n ) ;

		const b = itertools.list( sll.iter( B ) ) ;

		t.deepEqual( sort.issorted( compare , b , 0 , n ) , n , "check sorted" );
		t.deepEqual( a.length, n, "check length a" );
		t.deepEqual( b.length, n, "check length b" );

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
