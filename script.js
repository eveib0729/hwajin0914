document.addEventListener("DOMContentLoaded", function () {



    /* =========================
       SMOOTH SCROLL
    ========================= */


    const navLinks = document.querySelectorAll(
        '.header nav a[href^="#"]'
    );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();


            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(targetId);


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });






    /* =========================
       SCROLL REVEAL
    ========================= */


    const revealElements = document.querySelectorAll(
        ".section-title, " +
        ".profile-container, " +
        ".about-box, " +
        ".preference-card, " +
        ".flower-box, " +
        ".detail-card, " +
        ".shop-container, " +
        ".gallery-item, " +
        ".note-box"
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });




    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );



    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });






    /* =========================
       GALLERY LIGHTBOX
    ========================= */


    const galleryItems =
        document.querySelectorAll(
            ".gallery-item img"
        );



    galleryItems.forEach(function (image) {

        image.addEventListener(
            "click",
            function () {


                const overlay =
                    document.createElement("div");


                overlay.className =
                    "image-lightbox";



                const largeImage =
                    document.createElement("img");


                largeImage.src =
                    this.src;


                largeImage.alt =
                    this.alt;



                const closeButton =
                    document.createElement("button");


                closeButton.innerHTML =
                    "&times;";


                closeButton.className =
                    "lightbox-close";



                overlay.appendChild(
                    largeImage
                );


                overlay.appendChild(
                    closeButton
                );


                document.body.appendChild(
                    overlay
                );



                requestAnimationFrame(
                    function () {

                        overlay.classList.add(
                            "active"
                        );

                    }
                );



                closeButton.addEventListener(
                    "click",
                    function () {

                        closeLightbox();

                    }
                );



                overlay.addEventListener(
                    "click",
                    function (event) {

                        if (
                            event.target === overlay
                        ) {

                            closeLightbox();

                        }

                    }
                );



                document.addEventListener(
                    "keydown",
                    function escHandler(event) {

                        if (
                            event.key === "Escape"
                        ) {

                            closeLightbox();

                            document.removeEventListener(
                                "keydown",
                                escHandler
                            );

                        }

                    }
                );



                function closeLightbox() {

                    overlay.classList.remove(
                        "active"
                    );


                    setTimeout(
                        function () {

                            overlay.remove();

                        },
                        300
                    );

                }


            }
        );

    });






    /* =========================
       TOP BUTTON
    ========================= */


    const topButton =
        document.createElement("button");


    topButton.className =
        "top-button";


    topButton.innerHTML =
        "↑";


    topButton.setAttribute(
        "aria-label",
        "페이지 맨 위로 이동"
    );


    document.body.appendChild(
        topButton
    );



    window.addEventListener(
        "scroll",
        function () {


            if (window.scrollY > 500) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        }
    );



    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



});