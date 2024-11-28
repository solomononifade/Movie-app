// Replace 'YOUR_API_KEY' with your OMDb API key
const API_URL = 'https://www.omdbapi.com/?apikey=ffb09042';

const searchInput = document.getElementById('search');
const movieContainer = document.getElementById('movie-container');

// Fetch movies from the API
async function searchMovies() {
  const query = searchInput.value.trim();
  if (!query) {
    movieContainer.innerHTML = '<p>Start typing to search for movies...</p>';
    return;
  }

  const response = await fetch(`${API_URL}&s=${query}`);
  const data = await response.json();

  if (data.Response === 'True') {
    displayMovies(data.Search);
  } else {
    movieContainer.innerHTML = '<p>No movies found. Try a different search!</p>';
  }
}

// Display movies dynamically
function displayMovies(movies) {
  const movieHTML = movies.map(movie => `
    <div class="movie">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
    </div>
  `).join('');
  movieContainer.innerHTML = movieHTML;
}

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the slideshow
showSlides();

// Handle logout
function handleLogout() {
    // Remove the 'isLoggedIn' flag from localStorage
    localStorage.removeItem('isLoggedIn');
    
    // Redirect the user to the login page
    window.location.href = 'login.html'; // Redirect to login page
}

// Check if the user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    // If not logged in, redirect to the login page
    window.location.href = 'login.html';
}

// Add event listener to the logout button
window.onload = function() {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
};