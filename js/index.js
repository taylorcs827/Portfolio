import { projects } from '.data.js';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Navigation toggle for mobile menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Helper function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Only run this code on the portfolio item details page
if (window.location.pathname.includes('portfolio-item.html')) {
    const projectId = getQueryParam('id'); // Get the project ID from URL
    const project = projects[projectId]; // Find the corresponding project

    if (project) {
        // Target the container where the project details will be displayed
        const detailsDiv = document.querySelector('.project-display-container');

        // Inject the project details into the container
        detailsDiv.innerHTML = `
            <section class="project-detail">
                <div class="project-detail__content">
                    <div class="text-content">
                        <h2 class="section__title">${project.title}</h2>
                        <p class="section__subtitle">${project.subtitle}</p>
                        <p class="section__description">${project.descriptionIntro}</p>
                        <p class="section__details">${project.descriptionDetails}</p>
                        <a href="${project.html}" target="_blank" rel="noopener noreferrer" class="project-link">Visit Project</a>
                    </div>
                    <div class="project-image">
                        
                        <img src="${project.imgDetails}" alt="${project.title}">
                    </div>
                </div>
            </section>
        `;
    } else {
        console.error('Project not found!');
    }
}
