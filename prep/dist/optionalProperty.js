"use strict";
function describeMocha(person) {
    console.log(`Joe is a paramedic: ${person.paramedic}`);
    if (person.renting) {
        console.log(`Joe is renting: ${person.renting.toUpperCase()}`);
    }
}
let joe = { paramedic: true, renting: 'true' };
let mayo = { paramedic: false, renting: 'false' };
describeMocha(joe);
describeMocha(mayo);
