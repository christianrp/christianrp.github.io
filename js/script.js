const bodyTag = document.querySelector('[data-section="body-tag"]');
const projectsSection = document.querySelector('[data-section="projects"]');
const contactSection = document.querySelector('[data-section="contact"]');
const skillsSection = document.querySelector('[data-section="skills"]');
const allCloseButtons = document.querySelectorAll('[data-section="close"]');

projectsSection.addEventListener('click', showSection);
skillsSection.addEventListener('click', showSection);
contactSection.addEventListener('click', showSection);

allCloseButtons.forEach(element => {
    element.addEventListener('click', closeSection);
});

function showSection() {
    bodyTag.classList.add(this.dataset.section + '-show');
}

function closeSection() {
    const parentSection = this.parentElement.dataset.section;
    bodyTag.classList.remove(parentSection);
}