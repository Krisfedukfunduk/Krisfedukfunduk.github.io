window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //ФИЛЬТРАЦИЯ
    let allTab = document.querySelector('.allsoc'),
        instTab = document.querySelector('.inst'),
        fbTab = document.querySelector('.fb'),
        waTab = document.querySelector('.wa'),
        vkTab = document.querySelector('.vk'),
        tabSoc = document.querySelectorAll('.pcont'),
        allTabCard = Array.from(tabSoc);


        instTab.addEventListener('click', showInst)
    function showInst() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            instTab.classList.add("filtr-act");
            fbTab.classList.remove("filtr-act");
            waTab.classList.remove("filtr-act");
            vkTab.classList.remove("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("inst")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    fbTab.addEventListener('click', showFb)
    function showFb() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            instTab.classList.remove("filtr-act");
            fbTab.classList.add("filtr-act");
            waTab.classList.remove("filtr-act");
            vkTab.classList.remove("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("fb")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    waTab.addEventListener('click', showWa)
    function showWa() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            instTab.classList.remove("filtr-act");
            fbTab.classList.remove("filtr-act");
            waTab.classList.add("filtr-act");
            vkTab.classList.remove("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("wa")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }


    vkTab.addEventListener('click', showVk)
    function showVk() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            instTab.classList.remove("filtr-act");
            fbTab.classList.remove("filtr-act");
            waTab.classList.remove("filtr-act");
            vkTab.classList.add("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("vk")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    
    allTab.addEventListener('click', showall)
    function showall() {
        allTabCard.forEach(filt => {

            allTab.classList.add("filtr-act");
            instTab.classList.remove("filtr-act");
            fbTab.classList.remove("filtr-act");
            waTab.classList.remove("filtr-act");
            vkTab.classList.remove("filtr-act");

            filt.classList.remove("remove", "show");
        })
    }

});
