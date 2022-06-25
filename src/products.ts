export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "coffee", price: 3.0 },
  { name: "pretzels", price: 2.5 },
  { name: "chocolate", price: 3.99 },
];

export function calcAverageProductPrice(products: Product[]): number {
  let sum = 0;
  if (products.length === 0) {
    return 0;
  }
  //   let productItems: Products = products[0];

  for (let i of products) {
    sum += i.price;
    // let priceCnt = productItems.price;
    // let avg = sum / priceCnt;
  }
  return sum / products.length;
}
//in is keu
//of is value
