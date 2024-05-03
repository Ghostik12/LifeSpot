function filter(inputParseFuncction) {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector('h3').innerText;
        if (!videoText.toLowerCase().includes(inputParseFuncction.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
// создадим объект Map для хранения сессии
let session = {
    'startDate' : new Date(),
    'userAgent' : window.navigator.userAgent,
    'userAge' : prompt("Пожалуйста, введите ваш возраст")
};

//function handleSession() {
////    // создадим объект Map для хранения сессии
////    // Сохраним UserAgent
//    session.set("userAgent", window.navigator.userAgent)


//    session.set("userAge", prompt("Пожалуйста, введите ваш возраст"))
//    session.set("startDate", new Date().toLocaleString())

//    // Проверка на возраст и сохранение сессии
//    //if (session.get("age") >= 18) {
//    //    let startDate = new Date().toLocaleString();

//    //    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
//    //    session.set("startDate", startDate)
//    //}
//    //else {
//    //    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
//    //    window.location.href = "http://www.google.com"
//    //}
//    //// Вывод в консоль
//    //for (let result of session) {
//    //    console.log(result)
//    //}
    
//    //return session;
//}

function checkAge() {
    // Проверка на возраст и сохранение сессии
    if (session.get("userAge") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession(session) {
    console.log('Начало сессии: ' + session.startDate)
    console.log('Даныне клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
}