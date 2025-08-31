<div class="contact">
    <div class="contactform-send-message">
        Send a message to Laundry 24 Orlando:
    </div>
    <form id="contact-form">
        <ul>
            <li>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </li>
            <li>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </li>
            <li>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </li>
            <li class="button">
                <button type="submit">Send</button>
            </li>
        </ul>
    </form>
    <div id="response-message" style="display: none;"></div>
</div>

<div class="map-container">
    <div class="map-link">
        <a href="https://maps.app.goo.gl/f1cUKDwtychsicR1A" target="_blank" rel="noopener noreferrer">
            Click here to view Laundry 24 Orlando in Google Maps
        </a>
    </div>
    <div class="static-map">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.137465023263!2d-81.32786334775733!3d28.48019804218407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e763827b2e5d73%3A0x8bab31ab87c160b4!2sLaundry%2024%20Orlando!5e1!3m2!1sen!2skh!4v1756608925572!5m2!1sen!2skh"
            width="90%" 
            height="600" 
            style="border:0; margin: 0 auto; display: block;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    </div>
</div>

<script src="contact/contact-form.js"></script>
<?php include 'footer/footer-contact.php'; ?>