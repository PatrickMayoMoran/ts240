// Can I alias a readonly Array?
type Roster = ReadonlyArray<string>;

let bTeam: Roster = ['Ben', 'Sultan', 'Luc'];
bTeam[0] = 'frazer';
bTeam.push('tim');
