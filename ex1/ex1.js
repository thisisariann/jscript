/*1. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.*/

const shopList = ["jeans", "jacket", "tshirt", "skirt"];

for (let i = 0; i < shopList.length; i++) {
  console.log(shopList[i]);
}

//////////////////////////

let shopping = [
  { shop: "zara", product: "jacket" },
  { shop: "asos", product: "jeans" },
  { shop: "drmartins", product: "boots" },
];
for (let item of shopping) {
  console.log(`shop: ${item.shop},product: ${item.product}`);
}
