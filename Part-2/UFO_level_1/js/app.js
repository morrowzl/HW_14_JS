// from data.js => an array of dictionaries (js objects)
var tableData = data;

var filterBtn = d3.select("#filter-btn");

var dataBtn = d3.select("#data-btn");

var inputDate = d3.select("#datetime");

console.log(tableData.length);

filterBtn.on("click", function() {

  d3.select("#results-head").selectAll("tr").remove();

  var thead = d3.select("#results-head");

  headrow = thead.append("tr");
  headrow.append("th").text("Date");
  headrow.append("th").text("City");
  headrow.append("th").text("State");
  headrow.append("th").text("Country");
  headrow.append("th").text("Shape");
  headrow.append("th").text("Duration");
  headrow.append("th").text("Comments");

  d3.select("#results-body").selectAll("tr").remove();

  var inputValue = inputDate.property("value");

  function matchDates(searchDate) {
    return searchDate.datetime == inputValue;
  }

  var matching = tableData.filter(matchDates);

  var tbody = d3.select("#results-body");

  matching.forEach((filteredResult) => {
    var row = tbody.append("tr");
    Object.entries(filteredResult).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});

dataBtn.on("click", function() {

  var dataHead = d3.select("#all-data-head");

  headrow = dataHead.append("tr");
  headrow.append("th").text("Date");
  headrow.append("th").text("City");
  headrow.append("th").text("State");
  headrow.append("th").text("Country");
  headrow.append("th").text("Shape");
  headrow.append("th").text("Duration");
  headrow.append("th").text("Comments");

  function retrieveData(entry) {
    return entry;
  }

  var retrievedData = tableData;

  var dataBody = d3.select("#all-data-body");
  
  retrievedData.forEach((entry) => {
    var row = dataBody.append("tr");
    Object.entries(entry).forEach(([key, value]) => { 
      var cell = row.append("td");
      cell.text(value);
    });
  });
});