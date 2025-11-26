let count = 0;
let auto = false;
let autoInterval;

const counter = document.getElementById("counter");
const clickBtn = document.getElementById("clickBtn");
const autoToggle = document.getElementById("autoToggle");
const speedInput = document.getElementById("speedInput");

// Обычный клик
clickBtn.onclick = () => {
    count++;
    counter.textContent = count;
};

// Функция запуска автокликера
function startAuto() {
    let speed = Number(speedInput.value);

    autoInterval = setInterval(() => {
        count++;
        counter.textContent = count;
    }, speed);
}

// Кнопка автокликера в панели
autoToggle.onclick = () => {
    if (!auto) {
        auto = true;
        autoToggle.textContent = "Автокликер: ON";
        startAuto();
    } else {
        auto = false;
        autoToggle.textContent = "Автокликер: OFF";
        clearInterval(autoInterval);
    }
};

// Обновление скорости "на лету"
speedInput.onchange = () => {
    if (auto) {
        clearInterval(autoInterval);
        startAuto();
    }
};