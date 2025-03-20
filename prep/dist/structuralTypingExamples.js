"use strict";
let besser = { sport: "Frisbee", name: "besser" };
let tag = besser; // allowed, OLine has same properties as DLine
let rayray = { sport: "Frisbee", name: "rayray", goodThrower: true };
let oLinePlayer = rayray; //allowed, Handler is a subtype of OLine
