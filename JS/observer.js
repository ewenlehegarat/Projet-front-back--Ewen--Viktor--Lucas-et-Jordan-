export function observe() {
    window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav').classList.add('view');
    });

    const observedElements = document.querySelectorAll('.candidatures_tables');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("view");
        // optionnel : arrêter l’observation après l’animation
        observer.unobserve(entry.target);
        }
    });
    });
    observedElements.forEach(el => observer.observe(el));
}