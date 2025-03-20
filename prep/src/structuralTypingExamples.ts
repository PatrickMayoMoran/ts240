// A type with same properties can be assigned - just an alias
type OLine = {
  sport: string;
  name: string;
}

type DLine = {
  sport: string;
  name: string;
}

let besser: OLine = {sport: "Frisbee", name: "besser"};
let tag: DLine = besser; // allowed, OLine has same properties as DLine

// A type with same properties AND MORE is a valid subtype
type Handler = {
  sport: string;
  name: string;
  goodThrower: boolean;
}

let rayray: Handler = { sport: "Frisbee", name: "rayray", goodThrower: true };
let oLinePlayer: OLine = rayray; //allowed, Handler is a subtype of OLine

// no literals with extra properties
// let dLinePlayer: DLine = {sport: "Frisbee", name: "broiler", goodThrower: true };
// makes sense - if you have defined a type, why are you using an explicit literal of not that type?
// "Object literal may only specify known properties and 'goodThrower' does not exist on type DLine

// but... can't access properties on variable with narrower type
// console.log(oLinePlayer.goodThrower);
// Property 'goodThrower' does not exist on type OLine
// ...even though current data of rayray does have goodThrower property!
