interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    // Let's just simply assume product id is same as the index of the product in the products array
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

type UpdateableProductFields = Partial<Omit<Product, "id">>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  // Your implementation here:
  const product = products.find(p => p.id === productId);
  if (product) {
    products[product.id] = {
    ...product,
    ...updatedValues,
    };
  } else {
    console.log("product not found")
  }
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
}

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
});
