class ElasticString {
    constructor(container) {
        this.container = container;
        this.path = container.querySelector("path");
        this.initialPath = this.path.getAttribute('d');
        this.finalPath = this.initialPath;

        this.addEventListeners();
    }

    addEventListeners() {
        this.container.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.container.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    }

    onMouseMove(event) {
        const rect = this.container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const newPath = `M 0 40 Q ${x} ${y} 1000 40`;
        gsap.to(this.path, {
            attr: { d: newPath },
            duration: 0.4,
            ease: "power3.out"
        });
    }

    onMouseLeave() {
        gsap.to(this.path, {
            attr: { d: this.finalPath },
            duration: 1.5,
            ease: "elastic.out"
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const stringContainers = document.querySelectorAll(".string");
    stringContainers.forEach(container => new ElasticString(container));
});
