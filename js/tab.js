window.addEventListener("DOMContentLoaded", function () {
    "use strict";

//ТАБЫ

    let tab = document.querySelectorAll(".flo"),
        info = document.querySelector(".floristtab"),
        tabContect = document.querySelectorAll(".tab-content");
            //Функция которая скрывает контентные табы
    function hideTabContect(a) {
        for (let i = a; i < tabContect.length; i++) {
            tabContect[i].classList.remove("showph");
            tabContect[i].classList.add("hide");
        }
    }


    //Скрываются все кроме 1 элемента
    hideTabContect(1);
    //Функция показа контентных табов
    function ShowTabContect(b) {
        if (tabContect[b].classList.contains("hide")) {
            tabContect[b].classList.remove("hide");
            tabContect[b].classList.add("showph");
        }
    }

    //Создаем событие клика на родителя, используя делегирование событий
    info.addEventListener("click", function (event) {
    let target = event.target;

    if (target && target.classList.contains("flo")) {
        // Связь элементов при совпадении target
        for (let i = 0; i < tab.length; i++) {
            //если совпадают
            if (target == tab[i]) {
                //Скрываем все табы
                hideTabContect(0);
                // удаляем класс активности таба
                tab.forEach((item) => {
                    item.classList.remove("active");
                });
                //элементу target(на который кликнули) добавляем активный класс
                target.classList.add("active");

                //Совпадение по нумерации
                ShowTabContect(i);
                break;
            }
        }
    }
    });

});
