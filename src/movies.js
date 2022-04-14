

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesParam) {
  let directors = moviesParam.map((eachMovie) => {
    return eachMovie.director

  })

  return directors

}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(dramaMovies) {
  // aplicar un filter
  let numberFilms = dramaMovies.filter((eachMovie) => {
    return (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama"))
  })
  return numberFilms.length
}
//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieRecords) {

  if (movieRecords.length === 0) {
    return 0;
  }

  let scoreFilms = movieRecords.reduce((acc, eachMovie) => {
    if (eachMovie.score !== undefined) {
      return acc + eachMovie.score
    } else {
      return acc;
    }
  }, 0)

  let media = scoreFilms / movieRecords.length
  let roundMedia = media.toFixed(2)
  return parseFloat(roundMedia)
}
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieParam) {

  if (movieParam.length === 0) {
    return 0;
  }

  let dramaMovies = movieParam.filter((eachElem) => {
    return eachElem.genre.includes("Drama")
  })

  if (dramaMovies.length === 0) {
    return 0;
  }

  let averageDramaMovie = dramaMovies.reduce((acc, eachElem) => {
    return acc + eachElem.score
  }, 0) / dramaMovies.length

  let roundAverageTotal = averageDramaMovie.toFixed(2)

  return parseFloat(roundAverageTotal)

}

//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieRecords) {

  let movieRecordsCopy = JSON.parse(JSON.stringify(movieRecords))

  movieByYear = movieRecordsCopy.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1
    } else if (elem1.year < elem2.year) {
      return -1
    } else {
      if (elem1.title[0] > elem2.title[0]) {
        return 1;
      } else if (elem1.title[0] < elem2.title[0]) {
        return -1;
      } else {
        return 0;
      }
    }
  })
  return movieByYear
}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieRecords) {
  let movieRecordsCopy = JSON.parse(JSON.stringify(movieRecords))

  let titles = movieRecordsCopy.map((eachMovie) => {
    return eachMovie.title
  })

  let movieRecordsOrdered = titles.sort((elem1, elem2) => {
    if (elem1 > elem2) {
      return 1;
    } else if (elem1 < elem2) {
      return -1;
    } else {
      return 0;
    }
  })
  return movieRecordsOrdered.slice(0, 20)
}

//console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieRecords) {
  let movieRecordsCopy = JSON.parse(JSON.stringify(movieRecords))

  function hoursToMinutes(duration) {
    //'1h 36min'
    let hours = (duration[0])* 60;
    let minutes =(duration[3,4]);
    return hours + minutes;
  }

  let moviesWithMinutes = movieRecordsCopy.map((eachMovie) => {
    let minutes = hoursToMinutes(eachMovie.duration);
    eachMovie.duration = minutes;
  })

  return moviesWithMinutes;

}

//console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieRecords) {



}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

