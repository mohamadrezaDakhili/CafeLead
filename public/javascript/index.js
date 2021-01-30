let count = 0
let canvas_x
let canvas_y

function initialise() {
    let canvas = document.getElementById("canvas");
    canvas.addEventListener('mousedown', doMouseDown, false);
    window.addEventListener('resize', handleChangeSize)
}

// This function is called when the screen size changes
function handleChangeSize() {
    let circle = document.getElementsByClassName('circle')
    for (let i = 0; i < circle.length; i++) {
        let item = document.getElementsByClassName('circle')[i]
        // When the color of the item changes
        if (item.textContent % 5 === 0){
            item.classList.add('bg_red')
        }
        item.setAttribute('style', `
                top:+${Math.floor(Math.random() * window.innerHeight-60)}px;
                left:+${Math.floor(Math.random() * window.innerWidth-60)}px;
                `)
    }
}
// This function is called when clicked on the screen
function doMouseDown(e) {
    canvas_x = e.pageX;
    canvas_y = e.pageY;
    let circle = document.createElement("div");
    circle.classList.add('circle')
    circle.setAttribute("style",
        `
                top:${-30 + canvas_y}px;
                left:${-30 + canvas_x}px;
                `)
    count = count + 1
    circle.innerHTML = count
    if (count % 5 === 0) {
        circle.classList.add('bg_red')

    }
    document.getElementById('canvas').appendChild(circle)
}