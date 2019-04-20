// this function runs when the page is loaded

$(function() {
  // create JSON array and store in the data variable

  var data = [
    {
      category: "FRUIT",
      item: "Apples",
      type: "Honey Crisp",
      brand: "Little cuties",
      qty: 10,
      image: "/Users/ericapiano/Desktop/groceryList/images/apple.svg",
      name: "apple"
    },
    {
      category: "BEVERAGE",
      item: "Milk",
      type: "2%",
      brand: "generic",
      qty: "1 gallon",
      image: "/Users/ericapiano/Desktop/groceryList/images/milkGallon.svg",
      name: "milk"
    },
    {
      category: "PASTA",
      item: "Pasta",
      type: "Penne",
      brand: "Barilla",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/penne.svg",
      name: "penne"
    },
    {
      category: "DESSERT",
      item: "Gelatin dessert",
      type: "Green",
      brand: "Jello",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/jello.svg",
      name: "jello"
    },
    {
      category: "DAIRY",
      item: "Yogurt",
      type: "Assorted flavors",
      brand: "Chobani",
      qty: 12,
      image: "/Users/ericapiano/Desktop/groceryList/images/yogurt.svg",
      name: "yogurt"
    },
    {
      category: "PASTA",
      item: "Pasta",
      type: "Linguini",
      brand: "Barilla",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/linguini.svg",
      name: "linguini"
    },
    {
      category: "BEVERAGE",
      item: "Apple juice",
      type: "regular",
      brand: "Happy Farms",
      qty: 2,
      image: "/Users/ericapiano/Desktop/groceryList/images/appleJuice.svg",
      name: "apple juice"
    },
    {
      category: "BEVERAGE",
      item: "Vodka",
      type: "Tangerine",
      brand: "Grey Goose",
      qty: 1,
      image: "/Users/ericapiano/Desktop/groceryList/images/vodka.svg",
      name: "vodka"
    }
  ];

  // create a JSON string from data variable
  var json_array = JSON.stringify(data);

  // call  read_array function and parse the array string to it
  read_array(json_array);
});

function read_array(data) {
  var list_items = JSON.parse(data);

  // grabs/maps through each category frmo data array
  var list = list_items.map(
    val =>
      `<div class="photo"><img class="picture" src=${val.image} alt="${
        val.name
      }"><ul class="list_li"><u>${val.category}</u><br><b>${val.item}</b><br>${
        val.type
      }<br>${val.brand}<br> quantity: ${val.qty}<br> </ul> </div>`
  );

  // prints data onto page
  $("#list").html(list);
}
