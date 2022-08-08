let furniture = [
  {
    type: "desk",
    price: 27.87,
  },
  {
    type: "closet",
    price: 187.32,
  },
  {
    type: "chair",
    price: 79.29,
  },
  {
    type: "bed",
    price: 239.99,
  },
];

let devices = [
  {
    type: "desktop",
    price: [272, 769],
  },
  {
    type: "laptop",
    price: [499, 1800],
  },
  {
    type: "smartphone",
    price: [100, 800],
  },
  {
    type: "tablet",
    price: [185, 1000],
  },
  {
    type: "console",
    price: 889,
  },
];

let appliances = [
  {
    type: "oven",
    price: 780,
  },
  {
    type: "microwave",
    price: [50, 1400],
  },
  {
    type: "mixer",
    price: 215.17,
  },
];

function Product(category, type, price) {
  //
  this.category = category;
  this.type = type;
  this.price = price;
  this.render = function () {
    str = `<tr><td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="100" height="100"></td>
	    <td>${this.type}</td>`;
    if (Array.isArray(this.price)) {
      str += `<td><b>${this.price[0]} - ${this.price[1]} USD</b></td>`;
    } else str += `<td><b>${this.price} USD</b></td>`;
    str += `</tr>`;
    return str;
  };
}
function category(array, typeName) {
  array.forEach((element) => {
    const product = new Product(typeName, element.type, element.price);
    document.write(product.render());
  });
}
document.write(`
<table>
  <tr>
    <th>Icon</th>
    <th>Name</th>
    <th>Price</th>
  </tr>`);
category(furniture, `furniture`);
category(devices, `devices`);
category(appliances, `appliances`);
document.write(`</table>`);

// const product = new Product("furniture", "bed", 239.99);
// console.log(product.category); // furniture
// console.log(product.type); // bed
// console.log(product.price); // 239.99
// console.log(product.render());
