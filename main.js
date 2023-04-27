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

var data = [
  {decade: '1920s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1930s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1940s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1950s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1960s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1970s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1980s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '1990s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '2000s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0},
  {decade: '2010s', Drama: 0, Crime: 0, Action: 0, Biography:0, Western:0, Comedy:0, Adventure:0, Animation:0, Horror:0, Mystery:0, FilmNoir:0, Fantasy:0, Family:0, Thriller:0}
];

// Read CSV file using d3.js
d3.csv('imdb_top_1000.csv')
  .then(movies => {
    
    var movieList = movies.map(function(d) {
      return d; // Return each row as an object
    });
    //console.log(movies);

    console.log(movieList);

    var genres = [];
    var moviesOneGenre = movies.map(function(movie) {
      var firstGenre = movie.Genre.split(",")[0].trim(); // Extract first genre
      movie.Genre = firstGenre; // Update movie's genre field
      if(!genres.includes(movie.Genre)){
        genres.push(movie.Genre);
      }
      return movie;
    });
    console.log(genres);

    console.log(moviesOneGenre)
   
    // Loop through each movie
    moviesOneGenre.forEach(movie => {
      // Get the released year of the movie
      const releasedYear = parseInt(movie.Released_Year);

      var tempGenre = movie.Genre;

      // Check which decade the movie belongs to and push it into the respective array
      if(releasedYear >= 1920 && releasedYear < 1930){
        decade1920.push(movie);
        data[0][tempGenre] +=1;
      }
        else if (releasedYear >= 1930 && releasedYear < 1940) {
        decade1930.push(movie);
        data[1][tempGenre] +=1;
      } else if (releasedYear >= 1940 && releasedYear < 1950) {
        decade1940.push(movie);
        data[2][tempGenre] +=1;
      } else if (releasedYear >= 1950 && releasedYear < 1960) {
        decade1950.push(movie);
        data[3][tempGenre] +=1;
      } else if (releasedYear >= 1960 && releasedYear < 1970) {
        decade1960.push(movie);
        data[4][tempGenre] +=1;
      } else if (releasedYear >= 1970 && releasedYear < 1980) {
        decade1970.push(movie);
        data[5][tempGenre] +=1;
      } else if (releasedYear >= 1980 && releasedYear < 1990) {
        decade1980.push(movie);
        data[6][tempGenre] +=1;
      } else if (releasedYear >= 1990 && releasedYear < 2000) {
        decade1990.push(movie);
        data[7][tempGenre] +=1;
      } else if (releasedYear >= 2000 && releasedYear < 2010) {
        decade2000.push(movie);
        data[8][tempGenre] +=1;
      } else if (releasedYear >= 2010 && releasedYear < 2020) {
        decade2010.push(movie);
        data[9][tempGenre] +=1;
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



    console.log(data);

      

      
    // Define the data for the graph
    //const data = [  { decade: '1970s', action: 23, comedy: 45, drama: 67 },  { decade: '1980s', action: 43, comedy: 56, drama: 34 },  { decade: '1990s', action: 55, comedy: 34, drama: 78 },  { decade: '2000s', action: 67, comedy: 23, drama: 45 },  { decade: '2010s', action: 78, comedy: 67, drama: 23 },];

// Define the dimensions of the SVG element
const width = 750;
const height = 400;
const margin = { top: 20, right: 20, bottom: 40, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Define the x-axis scale
const xScale = d3.scaleBand()
  .domain(data.map(d => d.decade))
  .range([0, innerWidth])
  .paddingInner(0.1);

// Define the y-axis scale
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d3.sum(Object.values(d).slice(1)))])
  .range([innerHeight, 0]);

// Define the color scale
const colorScale = d3.scaleOrdinal()
  .domain(Object.keys(data[0]).slice(1))
  .range(d3.schemeCategory10);

// Create the SVG element
const svg = d3.select('#visualization2')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Add the x-axis to the SVG element
svg.append('g')
  .attr('transform', `translate(${margin.left}, ${innerHeight + margin.top})`)
  .call(d3.axisBottom(xScale));

// Add the y-axis to the SVG element
svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .call(d3.axisLeft(yScale));

// Add the bars to the SVG element
const bars = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .selectAll('rect')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', d => `translate(${xScale(d.decade)}, 0)`)
  .selectAll('rect')
  .data(d => Object.entries(d).slice(1))
  .enter()
  .append('rect')
  .attr('x', function(d) {
    const parentData = d3.select(this.parentNode).datum();
    return xScale.bandwidth() / Object.entries(parentData).length * (Object.keys(parentData).indexOf(d[0]) - 1);
  })
  .attr('y', d => yScale(d[1]))
  .attr('width', function() {
    const parentData = d3.select(this.parentNode).datum();
    return xScale.bandwidth() / Object.entries(parentData).length;
  })
  .attr('height', d => innerHeight - yScale(d[1]))
  .attr('fill', d => colorScale(d[0]));

  // Add the legend to the SVG element
const legend = svg.append('g')
.attr('transform', `translate(${innerWidth + margin.left + 10}, ${margin.top})`)
.selectAll('g')
.data(colorScale.domain())
.enter()
.append('g')
.attr('transform', (d, i) => `translate(0, ${i * 20})`);

legend.append('rect')
.attr('x', 0)
.attr('y', 0)
.attr('width', 15)
.attr('height', 15)
.attr('fill', colorScale);

legend.append('text')
.attr('x', 20)
.attr('y', 10)
.attr('dy', '0.35em')
.text(d => d);

  })

})();