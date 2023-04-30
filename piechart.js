(function() {

// Set up the dimensions and margins of the visualization
var width = 500;
var height = 500;

// Set up the SVG container
const svg = d3.select("#visualization3");

// Load the data from the CSV file
d3.csv("imdb_top_1000.csv")
.then(data => {

  // Prepare the data
  var decadeCounts = [0,0,0,0,0,0,0,0,0,0];

  // Loop through the data and count the number of movies per decade
  data.forEach(function(d) {
    var year = +d.Released_Year;
    var decade = Math.floor((year - 1920) / 10);
    decadeCounts[decade]++;
  });

  // Calculate the total number of movies
  var totalMovies = d3.sum(decadeCounts);

  // Prepare the data for the pie chart
  var pieData = [];
  for (var i = 0; i < 10; i++) {
    pieData.push({
      decade: (i * 10 + 1920) + 's',
      count: decadeCounts[i],
      percent: decadeCounts[i] / totalMovies
    });
  }


  // Set up the color scale
  var colorScale = d3.scaleOrdinal()
    .domain(pieData.map(function(d) { return d.decade; }))
    .range(d3.schemeCategory10);

  // Set up the pie chart layout
  var pie = d3.pie()
    .value(function(d) { return d.count; });

  // Generate the pie chart data
  var pieChartData = pie(pieData);

  // Set up the arc generator
  var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2);

  // Draw the pie slices
  var slices = svg.selectAll("path")
    .data(pieChartData)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(d) { return colorScale(d.data.decade); })
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // Add labels to the pie slices
  var labels = svg.selectAll("text")
    .data(pieChartData)
    .enter()
    .append("text")
    .text(function(d) { return d.data.decade + ' (' + (d.data.percent * 100).toFixed(1) + '%)'; })
    .attr("transform", function(d) {
        var pos = arc.centroid(d);
        pos[0] = pos[0] * 1.8; // adjust the horizontal position
        return "translate(" + pos + ")";
      })      
    .attr("text-anchor", "middle")
    .attr("font-size", "16px");
    });


})();