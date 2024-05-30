document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const loaderWrapper = document.getElementById('loader-wrapper');

    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 5000); 

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('toggle');
    });

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    // Simulate sending the message
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, message })
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.textContent = 'Message sent successfully!';
    })
    .catch(error => {
        responseMessage.textContent = 'Failed to send message.';
    });
});


const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
    const { phoneNumber, message } = req.body;

    client.messages.create({
        body: message,
        from: '+your_twilio_phone_number',
        to: phoneNumber
    })
    .then(message => {
        res.json({ success: true, message: 'Message sent successfully!' });
    })
    .catch(error => {
        res.json({ success: false, message: 'Failed to send message.', error });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
