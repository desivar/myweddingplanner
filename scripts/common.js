document.addEventListener('DOMContentLoaded', function() {
    // Last Modified and Year (Keep if you're using it)
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        const lastModifiedDate = document.lastModified;
        lastModifiedSpan.textContent = lastModifiedDate;
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // Membership Card and Modal (Combined and Corrected)
    const modal = document.getElementById('membership-info-modal');
    const learnMoreButtons = document.querySelectorAll('.learn-more'); // Select ALL buttons
    const modalContent = modal.querySelector('p');

    const membershipDetails = {  // Store the details for each membership
        gold: {
            title: "Gold Membership - Premium",
            details: "Our Gold package provides full wedding planning services, including venue selection, vendor coordination, budget management, and more.  You'll have a dedicated wedding planner to guide you through every step of the process.  Book a consultation to discuss your dream wedding!",
            price: "$5,000 - $10,000", // Example pricing
        },
        silver: {
            title: "Silver Membership - Standard",
            details: "Our Silver package offers vendor referrals, timeline creation, and day-of coordination.  Perfect for couples who have already planned some aspects of their wedding but need help with the final details.",
            price: "$3,000 - $5,000", // Example pricing
        },
        bronze: {
            title: "Bronze Membership - Essential",
            details: "Our Bronze package provides on-site coordination, problem-solving, and vendor liaison.  Ideal for couples who want to handle most of the planning themselves but need support on the big day.",
            price: "$1,500 - $3,000", // Example pricing
        },
    };

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const membershipType = button.dataset.membership;
            const details = membershipDetails[membershipType];

            modalContent.innerHTML = `<h3>${details.title}</h3><p>${details.details}</p><p>Price Range: ${details.price}</p><button>Book a Consultation</button>`;
            modal.showModal();

            const closeModalButton = modal.querySelector('#close-modal'); // Select the correct close button
            closeModalButton.addEventListener('click', () => {
                modal.close();
            });
        });
    });

    // Form Handling (Client-Side)
    const form = document.getElementById('membership-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);

            // Process form data (example: display in console)
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            alert("Thank you for your application (client-side)!");
            form.reset();
        });
    } else {
        console.error("Form not found!");
    }
    // Date Formatting (Keep if you're using it)
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
});
// Image Slider Code (Add this)
const images = document.querySelectorAll('.image-slider img'); 
let currentImage = 0; 
function showNextImage() {     
    images[currentImage].classList.remove('active');    
    currentImage = (currentImage + 1) % images.length;    
    images[currentImage].classList.add('active'); 
} 
setInterval(showNextImage, 3000); // Change image every 3 seconds
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