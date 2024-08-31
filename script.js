// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }


    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Mock submission action
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}