"use strict";
let bTeam = ['Ben', 'Sultan', 'Luc'];
// bTeam[0] = 'frazer'; no reassignment
// bTeam.push('tim'); no push method
function rosterSpot(roster) {
    return roster.map((_, index) => index);
}
let bSpots = rosterSpot(bTeam);
console.log(bSpots);
// bSpots[0] = 'dan'; index signature in type readonly array<number> only permits reading
