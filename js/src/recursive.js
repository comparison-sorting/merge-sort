
let recursive = function ( merge , copy ) {

	let sort = _recursive( merge ) ;

	return function ( compare , a , ai , aj , b , bi , bj ) {

		let n = aj - ai ;
		let k = 0 ;

		while ( n > 0 && ( n & 1 ) === 0 ) {
			n >>>= 1 ;
			++k ;
		}

		if ( n === 1 ) {

			if ( k & 1 ) {
				sort( compare , a , ai , aj , b , bi , bj ) ;
			}

			else {
				sort( compare , b , bi , bj , a , ai , aj ) ;
				copy( a , ai , aj , b , bi ) ;
			}

		}

		else {
			copy( a , ai , aj , b , bi ) ;
			sort( compare , a , ai , aj , b , bi , bj ) ;
		}

	} ;

} ;

exports.recursive = recursive ;
