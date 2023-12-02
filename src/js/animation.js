function animationTimelineInit () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.scroll-animation');
    hiddenElements.forEach((e) => observer.observe(e));
}
if (!(CSS.supports("animation-timeline", "auto"))) {
    animationTimelineInit();
document.addEventListener('astro:after-swap', animationTimelineInit);
}