document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response-message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('contactform.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('Server response:', result);
            
            responseDiv.style.display = 'block';
            responseDiv.className = result.success ? 'success' : 'error';
            responseDiv.textContent = result.success ? result.message : result.error;

            if (result.success) {
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            responseDiv.style.display = 'block';
            responseDiv.className = 'error';
            responseDiv.textContent = 'An error occurred while sending your message.';
        }
        
        console.log('Form submission completed');
    });
});