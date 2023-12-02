function animationTimelineInit () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }else {
                if(!(entry.classList.contains('slide'))) {
                    entry.target.classList.remove('show');
                }
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.scroll-animation');
    hiddenElements.forEach((e) => observer.observe(e));
}
if (!(CSS.supports("animation-timeline", "auto"))) {
    document.addEventListener('astro:page-load', animationTimelineInit);
    document.addEventListener('astro:after-swap', animationTimelineInit);
}