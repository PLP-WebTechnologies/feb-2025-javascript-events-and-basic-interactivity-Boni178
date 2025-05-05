// Button Click Event that changes the background color of the body from light to dark and vice versa
document.getElementById('toggleThemeButton').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
// Tabs Functionality
// This function handles the tab switching functionality from cuisine to dessert by clicking the buttons
document.querySelectorAll(".tab-link").forEach(button => {
    button.addEventListener("click", function() {
        const tabName = this.getAttribute("data-tab");

        // Remove active class from all buttons and add to the clicked one
        // This makes sure that only one button is active at a time and its the one that was clicked
        document.querySelectorAll(".tab-link").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        // Hide all tab content and shows the selected one
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
        document.getElementById(tabName).classList.add("active");
    });
});

// Form Validation for Email Subscription
// This function checks if the email is valid and provides feedback
document.getElementById("subscriberEmail").addEventListener("input", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailFeedback = document.getElementById("emailFeedback");

    if (emailPattern.test(this.value)) {
        emailFeedback.textContent = "✓ Valid email";
        emailFeedback.style.color = "green";
    } else {
        emailFeedback.textContent = "Invalid email format";
        emailFeedback.style.color = "red";
    }
});

// Image Gallery Click Event
document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", function() {
        alert("You clicked on: " + this.src);
    });
});