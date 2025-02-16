// Express and Spotify API setup as before

app.get('/callback', (req, res) => {
  // Authorization code exchange as before
  // Send the token back to the frontend (example using query parameter - for testing ONLY)
  res.redirect(`http://localhost:3000/?access_token=${accessToken}`); // Replace with your frontend URL
});

// Get access token from URL parameter (example - for testing ONLY)
const urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get('access_token');

if (accessToken) {
  localStorage.setItem('spotifyAccessToken', accessToken); // Now store it
  console.log('Access Token:', accessToken); // Add this line to check if the token is being set
  // Rest of your code to use the access token
} else {
  console.error('Access token not found');
}
