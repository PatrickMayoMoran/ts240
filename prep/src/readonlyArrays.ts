// Can I alias a readonly Array?
type Roster = ReadonlyArray<string>;

let bTeam: Roster = ['Ben', 'Sultan', 'Luc'];
// bTeam[0] = 'frazer'; no reassignment
// bTeam.push('tim'); no push method

function rosterSpot(roster: ReadonlyArray<string>): ReadonlyArray<number> {
  return roster.map((_, index) => index);
}

let bSpots = rosterSpot(bTeam);
console.log(bSpots);
// bSpots[0] = 'dan'; index signature in type readonly array<number> only permits reading
