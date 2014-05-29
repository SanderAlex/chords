var chords = new Object();

function chordsInit() {
	chords.Cmaj = [
				   [[null, 3, 2, 0, 1, 0], [null, 3, 2, null, 1, null]],
				   [[null, 3, 2, 0, 1, 3], [null, 3, 2, null, 1, 4]],
				   [[null, 3, 2, 0, null, null], [null, 3, 2, null, null, null]],
				   [[null, null, null, 5, 5, 3], [null, null, null, 3, 4, 1]],
				   [[null, 3, 5, 5, 5, 3], [null, 1, 2, 3, 4, 1]],
				   [[null, 3, 5, 5, 5, null], [null, 1, 2, 3, 4, null]],
				   [[null, null, 10, 9, 8, 8], [null, null, 3, 2, 1, 1]],
				   [[null, null, 10, 9, 8, null], [null, null, 3, 2, 1, null]],
				   [[8, 10, 10, 9, 8, 8], [1, 3, 4, 2, 1, 1]],
				   [[8, 10, 10, 9, null, null], [1, 3, 4, 2, null, null]]
				];
	chords.Cmin = [
				   [[null, 3, 1, 0, null, null], [null, 4, 1, null, null, null]]
				];
	chords.Cdmaj = [
					[[null, 4, 6, 6, 6, 4], [null, 1, 2, 3, 4, 1]],
					[[null, 4, 6, 6, 6, null], [null, 1, 2, 3, 4, null]],
					[[null, null, null, 6, 6, 4], [null, null, null, 3, 4, 1]]
				];
	chords.Cdmin = [
					[[null, 4, 6, 6, 5, 4], [null, 1, 3, 4, 2, 1]],
					[[null, 4, 6, 6, 5, null], [null, 1, 3, 4, 2, null]],
					[[null, null, null, 6, 5, 4], [null, null, null, 3, 2, 1]],
					[[9, 11, 11, 9, 9, 9], [1, 3, 4, 1, 1, 1]],
					[[null, null, 11, 9, 9, null], [null, null, 4, 1, 1, null]],
					[[null, null, 11, 9, 9, 9], [null, null, 4, 1, 1, 1]]
				];
	chords.Gmaj = [
					[[3, 5, 5, 4, 3, 3], [1, 3, 4, 2, 1, 1]],
					[[3, 5, 5, 4, null, null], [1, 3, 4, 2, null, null]],
					[[null, null, 5, 4, 3, null], [null, null, 3, 2, 1, null]]
				];
}