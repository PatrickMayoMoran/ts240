type MochaJoe = {
  paramedic: boolean;
  renting?: string;
}

function describeMocha(person: MochaJoe): void {
  console.log(`Joe is a paramedic: ${person.paramedic}`);
  if (person.renting) {
    console.log(`Joe is renting: ${person.renting.toUpperCase()}`);
  }
}

let joe: MochaJoe = { paramedic: true, renting: 'true' };
let mayo: MochaJoe = {paramedic: false, renting: 'false'};

describeMocha(joe);
describeMocha(mayo);
