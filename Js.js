// Scroll Up
document.getElementById("scrollUpBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Scroll Down
document.getElementById("scrollDownBtn").onclick = function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

// Slideshow Auto
var myCarousel = document.querySelector('#topSaleCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
});

// Search Filter
document.getElementById("productSearch").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll(".product-card");

    items.forEach(card => {
        let title = card.querySelector(".product-title").innerText.toLowerCase();
        card.style.display = title.includes(filter) ? "" : "none";
    });
});
