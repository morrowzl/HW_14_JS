//
//
//variableDeclarations-------------------------------------------------
var tableData = data;

var filterDateBtn = d3.select("#filterDateBtn");
var filterCityBtn = d3.select("#filterCityBtn");
var filterStateBtn = d3.select("#filterStateBtn");
var filterCountryBtn = d3.select("#filterCountryBtn");
var filterShapeBtn = d3.select("#filterShapeBtn");

var dataBtn = d3.select("#data-btn");

var inputDate = d3.select("#date");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

var dateQuery = inputDate.property("value");
var cityQuery = inputDate.property("value");
var stateQuery = inputDate.property("value");
var countryQuery = inputDate.property("value");
var shapeQuery = inputDate.property("value");

var resultsHead = d3.select("#resultsHead");

var resultsBody = d3.select("#resultsBody");

var noFilterBody = d3.select("#all-data-body");

//scriptCode-----------------------------------------------------------

filterBtn.on("click", function() {

  d3.select("#results-head").selectAll("tr").remove();

  theadrow = thead.append("tr");
  theadrow.append("th").text("Date");
  theadrow.append("th").text("City");
  theadrow.append("th").text("State");
  headrow.append("th").text("Country");
  headrow.append("th").text("Shape");
  headrow.append("th").text("Duration");
  headrow.append("th").text("Comments");

  d3.select("#results-body").selectAll("tr").remove();

  function matchDates(foobar) {
    return foobar.datetime == dateQuery;
  }

  var filteredDates = tableData.filter(matchDates);

  filteredDates.forEach((FD) => {
    var row = tbody.append("tr");
    Object.entries(FD).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

dataBtn.on("click", function() {

  var dataBody = d3.select("#all-data-body");
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

  
  
  retrievedData.forEach((entry) => {
    var row = dataBody.append("tr");
    Object.entries(entry).forEach(([key, value]) => { 
      var cell = row.append("td");
      cell.text(value);
    });
  });
});