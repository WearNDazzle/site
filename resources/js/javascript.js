document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Get the current page's pathname (e.g., "index.html")
    const currentPath = window.location.pathname.split('/').pop();

    console.log(navLinks)
    console.log(currentPath)

    // Loop through each link and compare its href with the current path
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.fontWeight = 'bold';
        }
    });
});
