document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginPage = document.getElementById("loginPage");
    const homePage = document.getElementById("homePage");
    const studentPageBtn = document.getElementById("studentPageBtn");
    const companyPageBtn = document.getElementById("companyPageBtn");

    // Event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here you would typically send a request to your server to authenticate the user
        // For simplicity, let's assume successful login for any username/password
        // Replace this with your actual authentication logic

        // For demonstration, let's just show the home page after successful login
        loginPage.style.display = "none"; // Hide the login page
        homePage.style.display = "block"; // Show the home page
    });

    // Event listener for accessing student page
    studentPageBtn.addEventListener("click", function() {
        // Implement logic to navigate to the student page
        console.log("Navigating to student page...");
    });

    // Event listener for accessing company page
    companyPageBtn.addEventListener("click", function() {
        // Implement logic to navigate to the company page
        console.log("Navigating to company page...");
    });

    // You can add similar event listeners for other features as needed
});
