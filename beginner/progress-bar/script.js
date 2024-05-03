"use strict";
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle-bar')
let  currentactive = 1
 
next.addEventListener('click', () =>{ 

    currentactive++
    if(currentactive > circles.length){
        currentactive = circles.length

    }
    update()
    
})



prev.addEventListener('click', () =>{ 

    currentactive--
    if(currentactive < 1){
        currentactive = 1

    }
    update()
})

// the function that loops through the whole circles making them active

function update () {
    circles.forEach(( circles , idx) => {
     if(idx < currentactive ){
        circles.classList.add('active')
     }else{
        circles.classList.remove('active')
     }
    })

    // the actives variable contains all the active classes 
    const actives = document.querySelectorAll('.active')
    console.log(actives.length, circles.length)

    // it gives the width of the progress bar 
    progress.style.width = (actives.length - 1 ) / (circles.length - 1) * 100 + '%'

    // controls the btns The prev and the Next btn

    if(currentactive === 1){
        prev.disabled = false
    } else if(currentactive === circles.length){
        next.disabled = true
        prev.disabled = false

    }else{
        next.disabled = false
        prev.disabled = false
    }
   
    
}

