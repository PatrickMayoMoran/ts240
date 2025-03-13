type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;

let item: ShippableProduct = {
  name: "Surfboard",
  price: 500,
  weight: 25,
  shippingCost: 100,
}
