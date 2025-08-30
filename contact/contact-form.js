document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response-message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = new URLSearchParams();
        
        for (let [key, value] of formData.entries()) {
            data.append(key, value);
        }

        try {
            const response = await fetch('contactform.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data.toString()
            });

            const result = await response.json();
            
            responseDiv.style.display = 'block';
            responseDiv.className = result.status === 'success' ? 'success' : 'error';
            responseDiv.textContent = result.message;

            if (result.status === 'success') {
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            responseDiv.style.display = 'block';
            responseDiv.className = 'error';
            responseDiv.textContent = 'An error occurred while sending your message.';
        }
    });
});