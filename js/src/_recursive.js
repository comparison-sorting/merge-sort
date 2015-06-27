

let _recursive = function ( merge ) {

	/**
	 * if n = 2^k then
	 *    input is in a if k is odd
	 *    input is in b if k is even
	 * otherwise input is in both a and b
	 * output is in b
	 */

	let sort = function ( compare , a , ai , aj , b , bi , bj ) {

		if ( aj - ai < 2 ) return ;

		let p = Math.floor( ( ai + aj ) / 2 ) ;

		sort( compare , b , bi , bi + p - ai , a , ai , p ) ;
		sort( compare , b , bi + p - ai , bj , a , p , aj ) ;

		merge( compare , a , ai , p , a , p , aj , b , bi ) ;

	} ;

	return sort ;

} ;

exports._recursive = _recursive ;
