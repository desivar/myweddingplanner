document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('#youtube-connect'); // Ensure the selector is correct
    if (element) {
        // Your code here
        element.addEventListener('click', function() {
            // Add your YouTube authentication code here
            // On successful connection, update the status and display the playlist selection
            document.getElementById('youtube-status').innerText = 'Connected';
            document.getElementById('playlist-selection').style.display = 'block';
            document.getElementById('music-search').style.display = 'block';
            document.getElementById('create-playlist').style.display = 'block';
        });
    } else {
        console.error('Element not found');
    }
});