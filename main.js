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

// Read CSV file using d3.js
d3.csv('imdb_top_1000.csv')
  .then(movies => {
    
    //console.log(d3.max(movies.Released_Year));
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
  })
  //.catch(error => console.error(error));



})();