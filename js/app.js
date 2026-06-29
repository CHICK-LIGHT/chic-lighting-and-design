// FEEDBACK FORM
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Feedback Submitted Successfully");

    form.reset();
});

//=======================================

// VISITOR COUNTER
let count = localStorage.getItem("visitorCount");

if (count === null) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitorCount"). textContent = "Visitors: " + count;

//=======================================

// DATE,TIME & GELOCATION
function updateTicker() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("ticker").textContent = "Date: " + date + " | Time: " + time + " | Location: " + locationText;
}
let locationText = "Getting Location";
updateTicker();
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            locationText = position.coords.latitude.toFixed(4) + ", " + position.coords.longitude.toFixed(4);

            updateTicker();
        },
        function() {
            locationText = "Location Denied";
            updateTicker();
        }
    );
}

setInterval(updateTicker, 1000);

//=====================================

// BRAND FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === "all" || item.dataset.brand === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

    });
});