"use strict";
let besser = { sport: "Frisbee", name: "besser" };
let tag = besser; // allowed, OLine has same properties as DLine
let rayray = { sport: "Frisbee", name: "rayray", goodThrower: true };
let oLinePlayer = rayray; //allowed, Handler is a subtype of OLine
// no literals with extra properties
// let dLinePlayer: DLine = {sport: "Frisbee", name: "broiler", goodThrower: true };
// makes sense - if you have defined a type, why are you using an explicit literal of not that type?
// "Object literal may only specify known properties and 'goodThrower' does not exist on type DLine
// but... can't access properties on variable with narrower type
// console.log(oLinePlayer.goodThrower);
// Property 'goodThrower' does not exist on type OLine
// ...even though current data of rayray does have goodThrower property!
