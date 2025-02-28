document.addEventListener("DOMContentLoaded", function() {
    const btnTop = document.createElement("button");
    btnTop.textContent = "↑";
    btnTop.classList.add("btn", "btn-primary", "fixed-bottom", "m-3");
    btnTop.style.display = "none";
    document.body.appendChild(btnTop);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});