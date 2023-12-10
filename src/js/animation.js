function animationTimelineInit () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    })

    const hiddenElements = document.querySelectorAll('.scroll-animation');
    hiddenElements.forEach((e) => observer.observe(e));
}
if (!(CSS.supports("animation-timeline", "auto"))) {
    document.addEventListener('astro:page-load', animationTimelineInit);
    document.addEventListener('astro:after-swap', animationTimelineInit);
}