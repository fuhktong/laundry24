document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    if (contactForm) {
        let isSubmitting = false;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (isSubmitting) return;

            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Show loading state
            isSubmitting = true;
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            fetch('../contact_handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                responseMessage.style.display = 'block';
                if (data.success) {
                    responseMessage.innerHTML = '<div style="color: green;">Message sent successfully!</div>';
                    contactForm.reset();
                } else {
                    responseMessage.innerHTML = '<div style="color: red;">Error: ' + data.error + '</div>';
                }
            })
            .catch(error => {
                responseMessage.style.display = 'block';
                responseMessage.innerHTML = '<div style="color: red;">Network error. Please try again.</div>';
            })
            .finally(() => {
                isSubmitting = false;
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});