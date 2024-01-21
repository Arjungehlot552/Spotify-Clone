 // JavaScript to handle the click event
 document.getElementById('spotifyLink').addEventListener('click', function(event) {
    // Prevent the default link behavior (preventing navigation)
    event.preventDefault();
    
    // Get the link from the 'href' attribute
    var link = this.getAttribute('href');
    
    // Open the link in a new tab/window
    window.open(link, '_blank');
});

function changeImage() {
    var image = document.getElementById('pause-img');

    // Check the current source of the image
    if (image.src.endsWith('player_icon3.png')) {
        // Change the source to the new image
        image.src = './assets/pause1.png';  // Replace 'new_image.png' with the path to your second image
    } else {
        // Change the source back to the original image
        image.src = './assets/player_icon3.png';
    }
}