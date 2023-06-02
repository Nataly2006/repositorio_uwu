// Variables de juego
var gameContainer = document.getElementById('game');
var hero = document.getElementById('hero');
var enemies = [];

// Movimiento del héroe
function moveHero(direction) {
    var currentPosition = parseInt(hero.style.left) || 0;
    var newPosition = currentPosition + direction * 10;

    // Limitar el movimiento dentro del juego
    if (newPosition >= 0 && newPosition + hero.offsetWidth <= gameContainer.offsetWidth) {
        hero.style.left = newPosition + 'px';
    }
}

// Generar enemigos
function generateEnemies() {
    for (var i = 0; i < 7; i++) {
        var enemy = document.createElement('div');
        enemy.className = 'enemy';
        enemy.style.top = '0px';
        enemy.style.left = (i * 100) + 'px';
        gameContainer.appendChild(enemy);
        enemies.push(enemy);
    }
}

// Mover enemigos hacia abajo
function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        var currentTop = parseInt(enemy.style.top) || 0;
        var newTop = currentTop + 10;

        // Si el enemigo alcanza la parte inferior, resetear su posición
        if (newTop > gameContainer.offsetHeight) {
            newTop = 0;
            enemy.style.left = (Math.random() * (gameContainer.offsetWidth - enemy.offsetWidth)) + 'px';
        }

        enemy.style.top = newTop + 'px';
    }
}

// Manejar eventos de teclado para mover al héroe
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        moveHero(-1);
    } else if (event.key === 'ArrowRight') {
        moveHero(1);
    }
});

// Generar enemigos iniciales y comenzar el movimiento de los enemigos
generateEnemies();
setInterval(moveEnemies, 100);

