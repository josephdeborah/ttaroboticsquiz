














// Select necessary elements
const cards = document.querySelectorAll(".card");
const loader = document.querySelector("#preloader");
const cardOverlays = document.querySelectorAll(".cardOverlay");
const form = document.querySelector(".form");
const inputField = document.querySelector('.SchoolName');
const picked = document.querySelector(".picked");
let schoolNameDisplay;

// Function to handle the DOM load
document.addEventListener("DOMContentLoaded", () => {
    // Form submission handler
    form.addEventListener("submit", (event) => {
        // Prevent default behavior for testing
        // event.preventDefault();

        const schoolName = inputField.value.trim();

        if (schoolName) {
            // Save the school name to localStorage
            localStorage.setItem("schoolName", schoolName);

            // Create and display the school name
            const p = document.createElement("p");
            p.textContent = schoolName;
            p.textContent +="picked"
            schoolNameDisplay = p;
            const schoolN =document.getElementsByClassName(".SchoolNameDisplay")
             schoolN.textContent=schoolName
        } else {
            alert("Please enter a valid school name.");
        }
    });
});

// Card functionality
function initializeCardEvents() {
    cards.forEach((cardElement) => {
        cardElement.addEventListener("click", handleCardClick);
    });
}

// Function to handle card clicks
function handleCardClick(event) {
    const card = event.currentTarget; // The clicked card
    const overlay = card.querySelector(".cardOverlay");

    if (!overlay && overlay.classList.contains("display")) {
        return; // If overlay already displayed, exit
    }

    // Show the card overlay
    overlay.classList.add("display");
    card.classList.add("cardDisplay");

    // Create and append a new card element in "picked"
    const cardClone = card.cloneNode(true); // Clone card with its children
    const p = document.createElement("p");
    p.textContent = localStorage.getItem("schoolName") || "Unknown School";
    cardClone.appendChild(p);

    picked.appendChild(cardClone);
    console.log("Card picked and displayed:", cardClone);
}

// Preloader functionality
window.addEventListener("load", () => {
    loader.style.display = "none"; // Hide the loader
    form.style.margin = "17vh auto"; // Center the form
});

// Initialize card events
initializeCardEvents();
