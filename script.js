// Handle logout
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "login.html";
}

// Redirect if logged in
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("index.html")) {
        const username = localStorage.getItem("username");
        if (!username) {
            window.location.href = "login.html";
        }
    }
});
