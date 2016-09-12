var request = require("request");
var http = require("http");

// request("http://www.example.com", function(err, response, body) {
//   if (err) {
//     throw err;
//   }

//   console.log("Response Status Code:", response.statusCode);

// });

//PART 1
function printExampleHTML(callback) {
  var requestOptions = {
    host: "example.com",
    path: "/"
  };
  var exampleHTML = '';
  http.get(requestOptions, function (response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {           // On Data Received
      exampleHTML += data;
    });

    response.on("end", function() {                // On Data Completed
      callback(exampleHTML);
    });

  });

}

//PART 2
function printExampleHTML2(callback) {
  request("http://www.example.com", function(err, response, body) {
    if (err) {
      throw err;
    }
    callback(body);
  });
}

//printExampleHTML(function(e) {console.log(e)});
//printExampleHTML2(function(e) {console.log(e)});
