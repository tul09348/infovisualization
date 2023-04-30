(function() {
  // Define arrays for each decade
  let decade1920 = [];
  let decade1930 = [];
  let decade1940 = [];
  let decade1950 = [];
  let decade1960 = [];
  let decade1970 = [];
  let decade1980 = [];
  let decade1990 = [];
  let decade2000 = [];
  let decade2010 = [];
  
  let width = 600; 
  let height = 600; 
  
  // Read CSV file using d3.js
  d3.csv('imdb_top_1000.csv')
    .then(movies => {
     
      // Loop through each movie
      movies.forEach(movie => {
        // Get the released year of the movie
        const releasedYear = parseInt(movie.Released_Year);
  
        // Check which decade the movie belongs to and push it into the respective array
        if(releasedYear >= 1920 && releasedYear < 1930){
          decade1920.push(movie);
        }
          else if (releasedYear >= 1930 && releasedYear < 1940) {
          decade1930.push(movie);
        } else if (releasedYear >= 1940 && releasedYear < 1950) {
          decade1940.push(movie);
        } else if (releasedYear >= 1950 && releasedYear < 1960) {
          decade1950.push(movie);
        } else if (releasedYear >= 1960 && releasedYear < 1970) {
          decade1960.push(movie);
        } else if (releasedYear >= 1970 && releasedYear < 1980) {
          decade1970.push(movie);
        } else if (releasedYear >= 1980 && releasedYear < 1990) {
          decade1980.push(movie);
        } else if (releasedYear >= 1990 && releasedYear < 2000) {
          decade1990.push(movie);
        } else if (releasedYear >= 2000 && releasedYear < 2010) {
          decade2000.push(movie);
        } else if (releasedYear >= 2010 && releasedYear < 2020) {
          decade2010.push(movie);
        }
      });
  
      // Print the movies in each decade
      console.log('Decade 1920', decade1920);
      console.log('Decade 1930:', decade1930);
      console.log('Decade 1940:', decade1940);
      console.log('Decade 1950:', decade1950);
      console.log('Decade 1960:', decade1960);
      console.log('Decade 1970:', decade1970);
      console.log('Decade 1980:', decade1980);
      console.log('Decade 1990:', decade1990);
      console.log('Decade 2000:', decade2000);
      console.log('Decade 2010:', decade2010);
  
      var moviess = movies.map(function(movie) {
        var firstGenre = movie.Genre.split(",")[0].trim(); // Extract first genre
        movie.Genre = firstGenre; // Update movie's genre field
        return movie;
      });
  
      console.log(movies);
  
      
    //visualization 1
    var svg = d3.select("#visualization1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Define the pack layout
  var pack = d3.pack()
    .size([width, height])
    .padding(1);
  
  // Prepare the movie genre data
  var genreData = Array.from(d3.group(movies, d => d.Genre), ([key, values]) => ({ Genre: key, Count: values.length }));
  
  console.log(genreData);
  
  // Convert the genre data to a hierarchical structure
  var root = d3.hierarchy({ children: genreData }, function (d) { return d.children; })
    .sum(function (d) { return d.Count; });
  
  console.log(root);
  
  // Create the circles
  var nodes = pack(root).descendants().slice(1);
  
  var colorScale = d3.scaleOrdinal()
    .domain(nodes.map(function(d) { return d.data.Genre; }))
    .range(d3.schemeCategory10);
  
  var circles = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", function (d) { return d.r; })
    .attr("fill", function(d) { return colorScale(d.data.Genre); })
    .attr("stroke", "white")
    .attr("stroke-width", 1);
  
  // Add genre labels
  var labels = svg.selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .text(function (d) { return d.data.Genre + " (" + d.data.Count + ")"; }) // Display genre name and movie count
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; })
    .attr("dy", ".10em")
    .attr("text-anchor", "middle")
    .attr("font-size", "15px")
    .attr("fill", "black");
  
      
    })
  
  })();