// registration.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const formData = new FormData(form); // Create FormData object from the form
        
        fetch('/register/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken') // Get CSRF token from cookie
            },
            body: formData // Set form data as the request body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful registration response
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the registration:', error);
        });
    });

    // Function to get CSRF token from cookie
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
