// Interactive features like a testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-slider blockquote');
    let current = 0;

    setInterval(() => {
        testimonials[current].style.display = 'none';
        current = (current + 1) % testimonials.length;
        testimonials[current].style.display = 'block';
    }, 3000);
});
