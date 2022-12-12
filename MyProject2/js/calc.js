let site, design, adaptive;

let calculator = {
    price: [
        [1000, 1000, 1000],
        [1000, 1500, 2000],
        [1500, 2500, 5000],
    ],
    days: [
        [2, 3, 5],
        [4, 3, 6],
        [3, 5, 7],
    ],
    run(siteType, desingType, adaptiveType){
        let total = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][desingType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][desingType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
         alert("Стоимость: "+ total +"\n Сроки: "+ days);
    }
}

function input() {
site = prompt("Выберите тип сайта: \n1 - Визитка, \n2 - Корпоративный, \n3 - Интернет-магазин");
    if(site != 1 && site != 2 && site != 3 ){
        alert("Введите число от 1 до 3");
        input();
        return;
    }
design = prompt("Выберите дизайн сайта: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
    if(design != 1 && design != 2 && design != 3 ){
        alert("Введите число от 1 до 3");
        input();
        return;
    }
adaptive = prompt("Выберите адаптивность сайта: \n1 - Только ПК, \n2 - Только Мобильная версия, \n3 - ПК + Мобильный");
    if(design != 1 && design != 2 && design != 3 ){
        alert("Введите число от 1 до 3");
        input();
        return;
    }
    calculator.run(site, design, adaptive);
    
}

input();
    



