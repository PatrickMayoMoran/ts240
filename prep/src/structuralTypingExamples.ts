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
