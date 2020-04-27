
export function recursive ( merge ) {

	const sort = function ( compare , head , size ) {

		// Handle the base case.
		if ( size < 2 ) return head ;

		const m = size / 2 | 0 ;
		const n = size - m ;

		let a = head , _b = head ;

		// Search the middle element.
		for ( let _m = m - 1 ; _m ; --_m ) _b = _b.next ;

		let b = _b.next ;

		// detach
		_b.next = null ;

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

}

