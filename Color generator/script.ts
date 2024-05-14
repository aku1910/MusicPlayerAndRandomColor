const container: HTMLElement | null = document.querySelector('.container');
const btnColor: HTMLElement | null = document.querySelector('#btn-color');

const colors: string[] = ['orange', 'blue', 'brown', 'red', 'yellow'];

if (container && btnColor) {
    btnColor.addEventListener('click', () => {
        const randomNumber: number = Math.random();
        const arrayIndex: number = Math.floor((colors.length - 1) * randomNumber);
        if (container) {
            container.style.backgroundColor = colors[arrayIndex];
        }
    });
}

 