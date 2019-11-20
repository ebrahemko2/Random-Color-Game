document.body.style.boxSizing = 'border-box';
document.body.style.margin = '0';
let container = document.createElement('div');
let gridBtn = document.createElement('button');
gridBtn.textContent = "Make A New Grid";
gridBtn.style.padding = '1em';
gridBtn.style.display = 'block';
gridBtn.style.margin = '20px auto';
container.style.width = '500px';
container.style.height = '500px';
container.style.margin = ' 0 auto';
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.flexWrap = 'wrap';
document.body.appendChild(gridBtn);
document.body.appendChild(container);

//This function used to remove previous grid
function removeSquares() {
    document.querySelectorAll('.squares').forEach((squareElement) => squareElement.remove());
}

//This function used to generate random color
function getRandomColor() {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    return `rgb(${red},${green},${blue})`;
}

//This function used to keep hover on each square
function keepHover() {
    document.querySelectorAll('.squares').forEach((s) => {
        s.addEventListener('mouseover', () => s.style.backgroundColor = getRandomColor());
    });
}

let squares = [];



function gridCreation(grid) {
    if (typeof(+grid) === 'number' && +grid > 0 && +grid <= 64 && Number.isInteger(+grid)) {
        removeSquares();
        for (let i = 1; i <= grid ** 2; i++) {
            squares[i] = document.createElement('div');
            squares[i].id = 'square' + i;
            squares[i].className = 'squares';
            container.appendChild(squares[i]);
        }
        let squareSize = (100/grid) + '%';
        document.querySelectorAll('.squares').forEach(s => {
            s.style.width = squareSize;
            s.style.height = squareSize;
            s.style.backgroundColor = '#E5F0FF';
        });
        keepHover();
    } else {
        return alert("Please enter a postitive integer number less than or equal to 64 😁");
    }
}


window.onload = function() {
    gridCreation(16);
}

gridBtn.addEventListener('click', function() {
    gridCreation(prompt('Enter The number of squares you want in each direction'));
    }
);







