// JavaScript source code
// Turn animation of clouds on, and off



function animate() {
    let element = document.getElementById('main')
    if (element != null && element != undefined) {
        element.classList.add("animate")
    }
}

function stopanimation() {
    let element = document.getElementById('main')
    if (element != null && element != undefined) {
        element.classList.remove("animate")
    }
}

function alterAnimation() {
    
    let button = document.getElementById('current')
    if (button != null && button != undefined) {
        let val = button.innerHTML
        //console.log(val)

        if (val == 'Animation: ON') {
            stopanimation()
            button.innerHTML = 'Animation: OFF'
        }
        else {
            button.innerHTML = 'Animation: ON'
            animate()
        }

    }
}