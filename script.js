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
    
    const emailAddress = document.getElementById('emailAddress').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailAddress, message })
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.textContent = 'Message sent successfully!';
    })
    .catch(error => {
        responseMessage.textContent = 'Send message using your Gmail.';
    });
});


