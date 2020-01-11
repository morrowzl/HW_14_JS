// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

var inputField = d3.select("#patient-form-input");


inputField.attr("placeholder", "A+, A-, B+, B-, AB+, AB-, O+, O-");

// Complete the click handler for the form
button.on("click", function() {

  // delete results of previous patient search
  d3.select("#bloodyTBody").selectAll("tr").remove();
  d3.select(".summary").selectAll("li").remove();

  var inputValue = inputField.property("value");

  d3.select("#button").text("Ka-POW");

  // Use the form input to filter the data by blood type
  function matchTypes(person) {
    return person.bloodType == inputValue;
  }

  var matching = people.filter(matchTypes);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  d3.select(".summary").append("li").text(`The input value was ${inputValue}`);
  // First, create an array with just the age values
  

  var ages = matching.map(person => person.age);
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var std = math.std(ages);
  var n = ages.length;
  var differences = ages.map(patientAge => patientAge-mean);
  var sigma = 0;
  for (var i = 0; i < differences.length; i++) {
    sigma += differences[i];
  }
  d3.select(".summary").append("li").text(`${matching.length} patients have this blood type`);
  d3.select(".summary").append("li").text(`Mean: ${mean}`);
  d3.select(".summary").append("li").text(`Median: ${median}`);
  d3.select(".summary").append("li").text(`Mode: ${mode}`);
  d3.select(".summary").append("li").text(`Standard Deviation: ${std}`);
  // sample variance = s*2 = (sigma (value-mean)*2) / n-1
  d3.select(".summary").append("li").text(`Variance of patient ages: ${n}`);
  console.log(`n = ${n}`);
  console.log(`differences = ${differences}`);
  console.log(`${differences.length} differences`)
  console.log(`sigma = ${sigma}`);

  var tbody = d3.select("#bloodyTBody");

  matching.forEach((thinger) => {
    var row = tbody.append("tr");
    Object.entries(thinger).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
