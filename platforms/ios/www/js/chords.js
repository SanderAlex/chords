var chords = new Object();
var notes, strings;

function chordsInit() {
	notes = ["E0", "F0", "Fd0", "G0", "Gd0", "A0", "Ad0", "B0",
                 "C1", "Cd1", "D1", "Dd1", "E1", "F1", "Fd1", "G1", "Gd1", "A1", "Ad1", "B1",
                 "C2", "Cd2", "D2", "Dd2", "E2", "F2", "Fd2", "G2", "Gd2", "A2", "Ad2", "B2",
                 "C3", "Cd3", "D3", "Dd3", "E3", "F3", "Fd3", "G3", "Gd3", "A3", "Ad3", "B3",
                 "C4", "Cd4", "D4", "Dd4", "E4"];

    strings = ["E0","A0","D1","G1","B1","E2"];

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