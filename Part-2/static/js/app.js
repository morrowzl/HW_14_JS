// from data.js => an array of dictionaries (js objects)
var tableData = data;

var filterBtn = d3.select("#filter-btn");

var dateBtn = d3.select("#date-btn");

var inputDate = d3.select("#datetime");

console.log(tableData.length);

filterBtn.on("click", function() {

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

dateBtn.on("click", function() {

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