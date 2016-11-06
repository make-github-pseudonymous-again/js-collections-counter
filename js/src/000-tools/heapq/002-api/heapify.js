
/**
 * Builds a heap in O(n) operations.
 *
 * @param {function} compare the comparison function
 * @param {array} x the array where the heap is stored
 *
 */

const heapify = function ( compare , x ) {

	const n = x.length ;

	for ( let k = n / 2 | 0 ; k ; ) {

		siftdown( compare , x , 0 , n , --k ) ;

	}

	return new Heap( compare , x ) ;

} ;

heapq.heapify = heapify ;