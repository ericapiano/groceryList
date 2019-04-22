// // global variables
// var host = window.location.origin;
// var loc = window.location.pathname;
// var dir = loc.substring(0, lastIndexOf("/"));

// // location  of data file
// var jsonfile =
//   host +
//   dir +
//   "/groceries.json"(function() {
//     myajax();
//   })();

// function myajax() {
//   function fetchJSONfile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//       if (httpRequest.readyState === 4) {
//         if (httpRequest.status === 200) {
//           var data = JSON.parse(httpRequest.responseText);
//           if (callback) callback(data);
//         }
//       }
//     };

//     httpRequest.open("GET", path);
//     httpRequest.send();
//   }

//   fetchJSONfile(jsonfile, function(data) {
//     var json_array = JSON.stringify(data);

//     read_array(json_array);
//   });
// }

// function read_array(data) {
//   var list_items = JSON.parse(data);

//   for (var i = 0; i < list_items.length; i++) {
//     var obj = list_items[i];
//     list +=
//       '<li class="list_li" id="' + obj.category + '">' + obj.item + "</li>";
//   }

//   document.getElementById("list").innerHTML = list;
// }

//

// =====================================================================================================

$(document).ready(function() {
  $.getJSON("groceries.json", function(data) {
    $.each(data, function() {
      $("ul").append("<li>" + this[category] + "</li>");
    });
  });
});
