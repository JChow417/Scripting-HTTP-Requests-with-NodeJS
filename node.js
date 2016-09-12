var request = require("request");

// request("http://www.example.com", function(err, response, body) {
//   if (err) {
//     throw err;
//   }

//   console.log("Response Status Code:", response.statusCode);

// });
function printExampleHTML(callback) {
  var http = require("http");
  var requestOptions = {
    host: "example.com",
    path: "/"
  };

  http.get(requestOptions, function (response) {

    response.setEncoding("utf8");

    response.on("data", function(data) {           // On Data Received
      console.log(data);
    });

    response.on("end", function() {                // On Data Completed
    });

  });

}


function printExampleHTML2(callback) {
  request("http://www.example.com", function(err, response, body) {
    if (err) {
      throw err;
    }
    console.log(body);
  });
}

printExampleHTML();
printExampleHTML2();