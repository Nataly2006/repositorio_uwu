function rotateElement(element, deg) {
    element.style.transform = `rotate(${deg}deg)`;
}

function updateClock() {
    var time = getSecondsSinceStartOfDay();

    var hourHand = document.getElementById('hour');
    var minuteHand = document.getElementById('minutes');
    var secondHand = document.getElementById('seconds');

    var secondDeg = (time / 60) * 360;
    var minuteDeg = (time / 3600) * 360;
    var hourDeg = (time / 43200) * 360;

    rotateElement(secondHand, secondDeg);
    rotateElement(minuteHand, minuteDeg);
    rotateElement(hourHand, hourDeg);
}

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(updateClock, 1000);
