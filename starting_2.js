// JavaScript interaction example
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');

    heading.addEventListener('mouseover', function() {
        heading.style.color = '#FFA500';
    });

    heading.addEventListener('mouseout', function() {
        heading.style.color = '';
    });
});
