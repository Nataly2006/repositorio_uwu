const pacMan1 = document.getElementById('pacman1');
const pacMan2 = document.getElementById('pacman2');
const ghost = document.getElementById('ghost');
const cherries = document.getElementById('cherries');

const maze = {
    top: 50,
    left: 50,
    width: 500,
    height: 300,
};

const directions = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
};

const score = {
    value: 0,
    display: document.createElement('div'),
    update: function () {
        this.display.innerHTML = `Score: ${this.value}`;
    },
};

function movePacman(pacman, direction) {
    const newPositionX = pacman.offsetLeft + direction.x * 10;
    const newPositionY = pacman.offsetTop + direction.y * 10;

    if (
        newPositionX >= maze.left &&
        newPositionX + pacman.offsetWidth <= maze.left + maze.width &&
        newPositionY >= maze.top &&
        newPositionY + pacman.offsetHeight <= maze.top + maze.height
    ) {
        pacman.style.left = newPositionX + 'px';
        pacman.style.top = newPositionY + 'px';
    }
}

function handleKeyPress(event) {
    const direction = directions[event.key];

    if (direction) {
        event.preventDefault();
        movePacman(pacMan1, direction);
    }
}

document.addEventListener('keydown', handleKeyPress);

score.update();

// Tu l
