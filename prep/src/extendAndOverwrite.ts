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
