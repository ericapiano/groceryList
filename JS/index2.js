// ----------------------------------------------------------------------------------------
// var fetch = new XMLHttpRequest();

// fetch.open("GET", "groceries.json", true);

// fetch.onload = function() {
//   if (this.status == 200) {
//     var elem = JSON.parse(this.responseText);
//     var output = "";
//     for (var i = 0, l = elem.groceries.length; i < l; i++) {
//       output += `
//               <div>
//                   <p>Category : ${elem.groceries[i].category}</p>
//                   <p>Item : ${elem.groceries[i].item}</p>
//                   <p>Type : ${elem.groceries[i].type}</p>
//               </div>
//           `;
//     }
//     $("#list").html(output);
//   }
// };

// =====================================================================================
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     document.getElementById(".list").innerHTML = myObj.name;
//   }
// };
// xmlhttp.open("GET", "groceries.json", true);
// xmlhttp.send();

// ============================================================================

// function load() {
//   var mydata = JSON.parse(groceries);
//   alert(mydata[0].category);
//   alert(mydata[0].item);
//   console.log("success??");
// }

// ==============================================================================================

// fetch("./groceries.json")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// =============================================================================

// function loadJSON(callback) {
//   var xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open("GET", "groceries.json", true);
//   xobj.onreadystatechange = function() {
//     if (xobj.readyState == 4 && xobj.status == "200") {

//       callback(xobj.responseText);
//     }
//   };
//   xobj.send(null);
// }
// var actual_JSON;
// function init() {
//   loadJSON(function(response) {
//     // Parse JSON string into object
//     actual_JSON = JSON.parse(response);
//     console.log(actual_JSON + "success??");
//   });
// }
// $("#list").html(actual_JSON);
