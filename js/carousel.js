document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: "images/laundry24slide1.png", alt: "Laundry 24 Orlando Slide 001" },
        { src: "images/laundry24slide2.png", alt: "Laundry 24 Orlando Slide 002" },
        { src: "images/laundry24slide3.png", alt: "Laundry 24 Orlando Slide 003" },
        { src: "images/laundry24slide4.png", alt: "Laundry 24 Orlando Slide 004" },
        { src: "images/laundry24slide5.png", alt: "Laundry 24 Orlando Slide 005" },
        { src: "images/laundry24slide6.png", alt: "Laundry 24 Orlando Slide 006" }
    ];

    let currentIndex = 0;

    function createCarousel() {
        const container = document.getElementById('carousel-container');
        if (!container) return;

        const carouselHTML = `
            <div class="carousel">
                <div class="carousel-inner" id="carousel-inner">
                    ${images.map((image, index) => `
                        <div class="carousel-item">
                            <img src="${image.src}" alt="${image.alt}" class="d-block w-100" />
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML = carouselHTML;
    }

    function updateCarousel() {
        const carouselInner = document.getElementById('carousel-inner');
        if (carouselInner) {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    function nextSlide() {
        currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
    }

    createCarousel();
    
    setInterval(nextSlide, 3000);
});