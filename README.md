# Mini Netflix Clone

This is a simple Netflix Clone app. I tried to build this app from scratch without any third-party libraries.

## Features
- The first page contains a list of movie poster thumbnails
- Random movies when refresh page
- Click the movie to see the rating, title, description and poster
- When home page is first loaded, the movie data is fetched from TMDB API
- After movie data is fetched, it's stored to my own context store
- It's possible to load different movies by updating URL. For example, when you type http://localhost:3000/movie/{movie_id} in browser, it's loaded and display movie detail with movie id
- Responsive for mobile, destkop
  
## Topic
- My own context for managing global state without redux
- TMDB API. (OMDB API has more information, but TMDB API generally better to work with) 
- Styled components without any CSS framework

## Dependencies
- react 17.0.2
- react-router 5.2.0
- styled-components 5.3.0