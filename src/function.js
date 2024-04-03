let pacman = document.getElementById('pacman');
let x = 0;
let y = 0;

function movePacman(event) {
    switch (event.key) {
        case 'ArrowUp':
            if(y!= -240){
            y -= 10;
        }
            break;
        
        case 'ArrowDown':
            if(y!= 330){
            y += 10;
        }
            break;
        
        case 'ArrowLeft':
            if(x!= -230){
            x -= 10; 
            }
            else
                x+=10;
            break;
        
        case 'ArrowRight':
            if(x!= 350){
            x += 10;
            }
            else
                x-=10;
            break;
        
    }
    pacman.style.top = y + 'px';
    pacman.style.left = x + 'px';
}

document.addEventListener('keydown', movePacman);

function invisible() {
    let buttonStart = document.getElementById('startGames')
    buttonStart.classList.add('invisibale')
    setTimeout(visual,1000);
}

function visual(){
    pacman.classList.remove('visibale')
    let gameField = document.getElementById('game')
    gameField.classList.remove('visibale')
}
