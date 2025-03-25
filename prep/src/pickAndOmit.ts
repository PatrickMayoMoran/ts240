type FloweringCity = {
  flowers: string;
  size: number;
  name: string;
  pacific: boolean;
  atlantic: boolean;
  college: string;
}

type DC = Pick<FloweringCity, "college" | "atlantic" | "name" | "size" | "flowers">;

let springAtAU: DC = {
  college: "AU",
  atlantic: true,
  name: "Washington, DC",
  size: 600000,
  flowers: "roses",
}

type SantaCruz = Omit<FloweringCity, "atlantic" | "college">;

let santaSnooze = {
  name: "Santa Cruz",
  size: "60000",
  flowers: "All of them",
  pacific: true,
}
