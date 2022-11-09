"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const lastFilm = [];

// lastFilm[0] = prompt("One of the last movies I watched", "");
// lastFilm[1] = prompt("How do you rate this movie?", "");
// lastFilm[2] = prompt("One of the last movies I watched", "");
// lastFilm[3] = prompt("How do you rate this movie?", "");

// personalMovieDB.movies[lastFilm[0]] = lastFilm[1];
// personalMovieDB.movies[lastFilm[2]] = lastFilm[3];

const replyOne = prompt("One of the last movies I watched", ""),
     replyTwo = prompt("How do you rate this movie?", ""),
     replyThree = prompt("one of the last movies I watched", ""),
     replyFour = prompt("How do you rate this movie?", "");

personalMovieDB.movies[replyOne] = replyTwo;
personalMovieDB.movies[replyThree] = replyFour;

console.log(personalMovieDB);

