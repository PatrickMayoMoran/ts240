interface Animale {
  name: string;
}

interface Doge extends Animale {
  breed: string;
}

interface NotOkay {
//  [x: number]: Animale; - number index is really a subset of string
//  [x: string]: Doge;  - so number needs to give a Doge or subtype - Animale is a supertype
    [x: number]: Doge; // This is okay! Doge is a subtype of animal
    [x: string]: Animale;
}
