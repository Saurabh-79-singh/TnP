// Handle the login button click event
document.getElementById('loginBtn').addEventListener('click', function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Sample validation logic
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page if login is successful
        window.location.href = "dashboard.html";  // Example of redirection
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
