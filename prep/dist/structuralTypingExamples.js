"use strict";
let besser = { sport: "Frisbee", name: "besser" };
let tag = besser; // allowed, OLine has same properties as DLine
let rayray = { sport: "Frisbee", name: "rayray", goodThrower: true };
let oLinePlayer = rayray; //allowed, Handler is a subtype of OLine
// no literals with extra properties
let dLinePlayer = { sport: "Frisbee", name: "broiler", goodThrower: true };
// makes sense - if you have defined a type, why are you using an explicit literal of not that type?
