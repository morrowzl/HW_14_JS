// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select(".grades.table");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "grades table table-striped");
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

// function printName(name) {
//   console.log(name);
// }

// function addRow(subArray) {
  
// }
// console.log(`explicit for loop`);

// for (var i = 0; i < grades.length; i++) {
//   printName(grades[i]);
// }

// grades.forEach(function(thinger) {
//   console.log(thinger);
//   var row = tbody.append("tr");

//   Object.entries(thinger).forEach(function([thing1, thing2]) {
//     var cell = row.append("td");
//     cell.text(thing2);
//   });
// });

grades.forEach((thinger) => {
  var row = tbody.append("tr");
  Object.entries(thinger).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});