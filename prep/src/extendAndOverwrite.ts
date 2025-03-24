interface FireFighter {
  name: string;
  station: string;
}

interface Polizei {
  station: number;
}

// interface Paramedic extends FireFighter, Polizei {
// above is an error - can't extend from two interfaces with non-identical properties and types
interface Paramedic extends FireFighter {
  // station: number; error - incorrect extension
}

type EMS = FireFighter & Polizei; // Type intersection will compile!

// let dschoey: EMS = {name: "Dschoey", station: 55};
// type number unassignable to type never (!!)
// type intersection said values have to satisfy both string and number, which can "never" happen, hence type
