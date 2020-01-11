// from data.js => an array of dictionaries (js objects)

// filter selection:
// list of checkboxes? <----------------------------------
// input entered or option selected? 
// if yes, filter by
// if no, not used as filter

// filters to include:
// date/time - input
// city - input with auto-complete suggestions?
// state - input two-letter abreviation (usa and canadian states/provinces)
// country - drop down select (usa or canada)
// shape - select or input with auto-complete suggestions

// Variable declarations-------------------------------------------------

var tableData = data; //zm

var filterBtn = d3.select("#filter-btn"); //zm

var dataBtn = d3.select("#data-btn"); //zm

var filterParameters = d3.select("EACH PARAMETER INPUT CORRESPONDING TO THE SELECTED FILTERS");

var thead = d3.select("#results-head"); //zm

var tbody = d3.select("#results-body"); //zm

var userQueries = inputDate.property("value"); // zm; moved from below where commented out;

// script code-----------------------------------------------------------

d3.selectAll(".filterSelector").on("change",update());
			
update();

// function for filter selection via checkboxes
// reference https://bl.ocks.org/johnnygizmo/3d593d3bf631e102a2dbee64f62d9de4
function update() {
  var selectedFilters [];
  d3.selectAll(".filterSelector").each(function() {
    
    currentCheckbox = d3.select(this);
    
    if(currentCheckbox.property("checked")) {
      selectedFilters.push(currentCheckbox.property("id"));
    }
//  else {remove currentCheckbox.property("id") from the array selectedFilters}
  });			
}

// function for when the filterBtn is clicked
filterBtn.on("click", function() {

  d3.select("#results-head").selectAll("tr").remove();

  headrow = thead.append("tr");
  headrow.append("th").text("Date");
  headrow.append("th").text("City");
  headrow.append("th").text("State");
  headrow.append("th").text("Country");
  headrow.append("th").text("Shape");
  headrow.append("th").text("Duration");
  headrow.append("th").text("Comments");

  d3.select("#results-body").selectAll("tr").remove();

//  put at top? -- did it
//  var inputValue = inputDate.property("value");
//

  function matchQuery(foo) {
    return foo.queryParameterValue == userEnteredValue;
  }

  var queryReturns = tableData.filter(matchQuery);

  // var tbody = d3.select("#results-body");

  matching.forEach((filteredResult) => {
    var row = tbody.append("tr");
    Object.entries(filteredResult).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}); // closes clicked filterBtn function


// // // // // // // //

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