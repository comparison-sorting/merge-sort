
const recursive = function ( merge ) {

	const sort = function ( compare , head , size ) {

		// Handle the base case.
		if ( size < 2 ) return head ;

		const m = size / 2 | 0 ;
		const n = size - m ;

		let a = head , b = head ;

		// Search the middle element.
		for ( let _m = m ; _m ; --_m ) b = b.next ;

		// Sort the two sublists.
		// a and b are the heads
		// of the sorted sublists
		a = sort( compare , a , m ) ;
		b = sort( compare , b , n ) ;

		// Merge the two sublists
		// and return the new head.
		return merge( compare , a , m , b , n ) ;

	} ;

	return sort ;

} ;

exports.recursive = recursive ;
