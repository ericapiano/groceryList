// using AJAX.......

// $.ajax({
//   url: "groceries.json",
//   dataType: "json",
//   type: "GET",
//   function(data) {
//     console.log(data);
//   }
// });

// =======================================

// Using Vanilla JS...........

function loadGroceries() {
  // create XHR object
  var xhr = new XMLHttpRequest();

  // declare request type & source -- GET, file/url pathing, async
  xhr.open("GET", "groceries.json", true);

  xhr.onload = function() {
    // check for status of HTTP response (200 = ok; 403 = forbidden; 404 = not found)
    if (this.status === 200) {
      // store JSON info in groceries variable
      var groceries = JSON.parse(this.responseText);

      var output = "";

      // loop through each item in each object of the JSON array
      for (var i in groceries) {
        // append value for each data point to output variable
        output +=
          '<div class="list">' +
          'img src="' +
          groceries[i].image +
          '">' +
          "<ul>" +
          "<li>" +
          groceries[i].category +
          '"</li>' +
          "<li>" +
          groceries[i].item +
          '"</li>' +
          "<li>" +
          groceries[i].type +
          '"</li>' +
          "<li>" +
          groceries[i].brand +
          '"</li>' +
          "<li>" +
          groceries[i].qty +
          '"</li>' +
          "</ul>" +
          "</div>";
      }

      // print data to HTML in the <div class=list> as made on HTML page
      document.getElementById("list").innerHTML = output;
    }
  };

  // sends request
  xhr.send();
}
