// this function runs when the page is loaded
$(function() {
  // create JSON array and store in the data variable
  var data = [
    {
      category: "fruit",
      item: "apples",
      type: "Honey Crisp",
      brand: "Little cuties",
      qty: 10,
      image: "/Users/ericapiano/Desktop/groceryList/images/apple.svg"
    },
    {
      category: "beverage",
      item: "milk",
      type: "2%",
      brand: "generic",
      qty: "1 gallon",
      image: "/Users/ericapiano/Desktop/groceryList/images/milkGallon.svg"
    },
    {
      category: "pasta",
      item: "Pasta",
      type: "Penne",
      brand: "Barilla",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/penne.svg"
    },
    {
      category: "dessert",
      item: "Gelatin dessert",
      type: "Green",
      brand: "Jello",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/jello.svg"
    },
    {
      category: "dairy",
      item: "Yogurt",
      type: "Assorted flavors",
      brand: "Chobani",
      qty: 12,
      image: "/Users/ericapiano/Desktop/groceryList/images/yogurt.svg"
    },
    {
      category: "pasta",
      item: "Pasta",
      type: "Linguini",
      brand: "Barilla",
      qty: 3,
      image: "/Users/ericapiano/Desktop/groceryList/images/penne.svg"
    },
    {
      category: "beverage",
      item: "Apple juice",
      type: "regular",
      brand: "Happy Farms",
      qty: 2,
      image: "/Users/ericapiano/Desktop/groceryList/images/appleJuice.svg"
    },
    {
      category: "beverage",
      item: "Vodka",
      type: "Tangerine",
      brand: "Grey Goose",
      qty: 1,
      image: "/Users/ericapiano/Desktop/groceryList/images/vodka.svg"
    }
  ];

  // create a JSON string from data variable
  var json_array = JSON.stringify(data);

  // call  read_array function and  parse the array string to it
  read_array(json_array);
});

function read_array(data) {
  "use strict";

  var list_items = JSON.parse(data);

  var list = list_items.map(
    val =>
      `<li class="list_li" id=${val.category}>${val.item}<br>${val.type}<br>${
        val.brand
      }<br>${val.qty}<br>${val.image}</li>`
  );

  $("#list").html(list);
}
