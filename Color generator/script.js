const container = document.querySelector('.container');
const btnColor = document.querySelector('#btn-color');
const colors = ['orange', 'blue', 'brown', 'red', 'yellow'];
if (container && btnColor) {
    btnColor.addEventListener('click', function () {
        const randomNumber = Math.random();
        const arrayIndex = Math.floor((colors.length - 1) * randomNumber);
        if (container) {
            container.style.backgroundColor = colors[arrayIndex];
        }
    });
}
