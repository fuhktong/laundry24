function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (!header) return;

    const mobileMenuHTML = `
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-content">
                <a href="index.php"><p>Home</p></a>
                <hr class="mobile-divider" />
                <a href="index.php?page=about"><p>About</p></a>
                <hr class="mobile-divider" />
                <a href="index.php?page=services"><p>Services</p></a>
                <hr class="mobile-divider" />
                <a href="index.php?page=laundroworks"><p>Laundroworks</p></a>
                <hr class="mobile-divider" />
                <a href="index.php?page=contact"><p>Contact</p></a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
});