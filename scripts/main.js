//reset console
console.clear();

//run javascript after DOM load
window.addEventListener('load', () => {
    const toggler = document.querySelector("#toggler");
    const navbar =  document.querySelector("nav");
    const nav_links = document.querySelector(".nav_links");
    const link = document.querySelectorAll("a");

    link.forEach(link => {
        link.addEventListener('click', () => {
            toggler.checked = false;
            navbar.classList.remove("active");
            nav_links.classList.remove("active");
        });
    });

    
    toggler.addEventListener('click', function () {
        navbar.classList.toggle("active");
        nav_links.classList.toggle("active");
    });
})