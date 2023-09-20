document.addEventListener("DOMContentLoaded", function() {
    const cvRecto = document.querySelector(".cv_recto");
    const cvVerso = document.querySelector(".cv_verso");

    cvRecto.addEventListener("click", function() {
       
        cvRecto.classList.add("active");
        cvVerso.classList.remove("active");
    });

    cvVerso.addEventListener("click", function() {
       
        cvVerso.classList.add("active");
        cvRecto.classList.remove("active");
    });
});
