
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const favoriteColorInput = document.getElementById('favoriteColor');
    const accesscodeInput = document.getElementById('accesscode');
    const loginError = document.getElementById('login-error');
    const birthdayMessage = document.querySelector('.birthday-message');
    const loginContainer = document.querySelector('.login-container');
    const displayUsername = document.getElementById('display-username');
    const userGreeting = document.getElementById('user-greeting');
    const birthdayMessageContent = document.getElementById('birthday-message-content');

    const birthdayMessages = [
        "Congratulations on your achievements! Your dedication and hard work have truly paid off. Never stop striving for excellence, and always remember to value your life above all else. May your journey be filled with joy and success. Keep moving forward, and never lose sight of your dreams.",
        "Happy birthday! Your accomplishments are a testament to your strength and resilience. Embrace every opportunity with open arms, and always value your well-being. May this year bring you new adventures and unforgettable memories. Believe in yourself, and you will achieve greatness.",
        "Wishing you a fantastic birthday! Your achievements inspire us all to reach for the stars. Remember to cherish every moment and prioritize your happiness. May your path be illuminated with success and fulfillment. Keep pushing boundaries, and never settle for mediocrity.",
        "Congratulations on another year of success and growth! Your achievements reflect your unwavering commitment and passion. Always remember to take care of yourself and appreciate the beauty of life. May your future be filled with endless possibilities and dreams come true. Stay positive, and always believe in your potential."
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = usernameInput.value;
        const favoriteColor = favoriteColorInput.value;
        const accesscode = accesscodeInput.value;

        if (accesscode === 'AYEZZA' && favoriteColor !== '') {
            // Correct access code and favorite color provided
            loginContainer.style.display = 'none'; // Hide login container
            birthdayMessage.style.display = 'block'; // Show birthday message
            displayUsername.textContent = username; // Display username

            // Personalize the greeting
            userGreeting.textContent = `Dear ${username},`;

            // Get random message
            const randomIndex = Math.floor(Math.random() * birthdayMessages.length);
            birthdayMessageContent.textContent = birthdayMessages[randomIndex];

            // Send data to server (example - replace with your actual API endpoint)
            sendDataToServer(username, favoriteColor, accesscode);

        } else {
            // Incorrect access code or missing favorite color
            loginError.textContent = 'Incorrect access code or missing favorite color. Please try again.';
        }
    });

    function sendDataToServer(username, favoriteColor, accesscode) {
        // This is placeholder code.  You will need to replace this with
        // actual code that sends data to your server-side endpoint.
        // For example, using the fetch API.

        console.log("Sending data to server:", { username, favoriteColor, accesscode });  // For debugging

        // Example using fetch (replace '/api/submit' with your actual endpoint)
        fetch('/api/submit', {  // Replace with your server endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, favoriteColor, accesscode })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
