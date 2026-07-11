const terminal = document.querySelector('section#hero div.terminal');

if (terminal) {
  let mouseX = 0;
  let mouseY = 0;

  // LERP
  let bgX = 0, bgY = 0;
  let fgX = 0, fgY = 0;

  // Коэффициент плавности
  const ease = 0.08;

  window.addEventListener('mousemove', (e) => {
    // Вычисляем отклонение курсора от центра экрана в диапазоне [-1, 1]
    mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  });

  function animateParallax() {
    // Большой круг
    const targetBgX = mouseX * 30;
    const targetBgY = mouseY * 30;

    // Плавный расчет (LERP)
    bgX += (targetBgX - bgX) * ease;
    bgY += (targetBgY - bgY) * ease;

    terminal.style.setProperty('--parallax-bg-x', `${bgX}px`);
    terminal.style.setProperty('--parallax-bg-y', `${bgY}px`);

    // Малый круг
    const targetFgX = mouseX * -60;
    const targetFgY = mouseY * -60;

    fgX += (targetFgX - fgX) * ease;
    fgY += (targetFgY - fgY) * ease;

    terminal.style.setProperty('--parallax-fg-x', `${fgX}px`);
    terminal.style.setProperty('--parallax-fg-y', `${fgY}px`);

    requestAnimationFrame(animateParallax);
  }

  animateParallax();
}


const abyss = document.querySelector('section#skills div.abyss');

if (abyss) {
    const intensity = 25;
    const speed = 0.001;

    function animateFloating(currentTime) {
        const t = currentTime * speed;

        const aX = (Math.sin(t * 1.0) * 0.7 + Math.sin(t * 2.3) * 0.3) * intensity;
        const aY = (Math.cos(t * 1.2) * 0.7 + Math.sin(t * 1.6) * 0.3) * intensity;

        const bX = (Math.sin(t * 0.8 + 2) * 0.6 + Math.cos(t * 1.9) * 0.4) * (intensity * 0.8);
        const bY = (Math.cos(t * 1.1 + 1) * 0.6 + Math.sin(t * 1.4) * 0.4) * (intensity * 0.8);

        const cX = (Math.sin(t * 1.3 + 4) * 0.5 + Math.sin(t * 2.5) * 0.5) * (intensity * 1.3);
        const cY = (Math.cos(t * 0.9 + 3) * 0.5 + Math.cos(t * 1.8) * 0.5) * (intensity * 1.3);

        // Передаем идеально сглаженные координаты в CSS
        abyss.style.setProperty('--shake-a-x', `${aX}px`);
        abyss.style.setProperty('--shake-a-y', `${aY}px`);
        abyss.style.setProperty('--shake-b-x', `${bX}px`);
        abyss.style.setProperty('--shake-b-y', `${bY}px`);
        abyss.style.setProperty('--shake-c-x', `${cX}px`);
        abyss.style.setProperty('--shake-c-y', `${cY}px`);

        // Повторяем на каждом кадре без каких-либо условий и перерывов
        requestAnimationFrame(animateFloating);
    }

    requestAnimationFrame(animateFloating);
}

const burgerMenu = document.querySelector('section#burger');
const openBurgerButton = document.querySelector('ul#open-bg');
const closeBurgerButton = document.querySelector('ul#close-bg');
const listElements = document.querySelectorAll('section#burger ul li a');

if (burgerMenu) {
    console.log(openBurgerButton)
    if (openBurgerButton) openBurgerButton.addEventListener("click", (e) => {
        burgerMenu.classList.remove("hide");
    });

    if (closeBurgerButton) closeBurgerButton.addEventListener("click", (e) => {
        burgerMenu.classList.add("hide");
    });

    listElements.forEach((item) => {
        item.addEventListener("click", (e) => {
            burgerMenu.classList.add("hide");
        });
    });
}
