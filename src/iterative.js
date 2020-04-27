
let iterative = function ( merge , copy ) {

	let sort = _iterative( merge , copy ) ;

	return function ( compare , a , ai , aj , b , bi , bj ) {

		if ( sort( compare , a , ai , aj , b , bi ) !== b ) {
			copy( a , ai , aj , b , bi ) ;
		}

	} ;

} ;

exports.iterative = iterative ;
