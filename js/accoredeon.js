window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const accordeon = () => {
        const btns = document.querySelectorAll(".f1");

        const blocks = document.querySelectorAll(".accordeon");

        blocks.forEach((block) => {
            block.classList.add("animate__animated", "animate__bounceInUp");
        });
        
        btns.forEach((btn) => {
            btn.addEventListener("click", function () {
                if (!this.classList.contains("active-p")) {
                    btns.forEach((btn) => {
                        btn.classList.remove("active-p", "active-style");
                    });
                    this.classList.add("active-p", "active-style");
                } else
                    btns.forEach((btn) => {
                        btn.classList.remove("active-p", "active-style");
                    });
            });
        });
    };
    accordeon();

});