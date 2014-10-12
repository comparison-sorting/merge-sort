
/**
 * Generates a binary lexicographical comparator predicate
 * from a binary delta operator.
 */

var lexicographical = function ( delta ) {

	/**
	 * Compares 2 arrays a and b lexicographically.
	 */

	var predicate = function ( a, b ) {

		var i, m, n, len, d;

		m = a.length;
		n = b.length;

		len = Math.min( m, n );

		for ( i = 0 ; i < len ; ++i ) {

			d = delta( a[i], b[i] );

			if ( d < 0 ) {
				return true;
			}

			else if ( d > 0 ) {
				return false;
			}

		}

		return m <= n;

	};

	return predicate;

};

exports.lexicographical = lexicographical;
