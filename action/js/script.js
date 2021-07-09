
//// canvas

var bord = document.querySelector("canvas")
bord.style.border="solid"
bord.style.textAlign="center"
bord.style.borderColor="red"
bord.style.width="1000px"
bord.style.height="600px"
var content = bord.getContext("2d")

var cont ={

    x:20,
    y:70,
    width: 30,
    height:20,
    fillStyle:"violet"

}


var xdelta=5;
var ydelta = 5


function update(){
    if(cont.x+cont.width>bord.width|| cont.x<0){
        xdelta*=-1
        cont.fillStyle="red"
    }
    if(cont.y+cont.height>bord.height|| cont.y<0){
        ydelta*=-1
        cont.fillStyle="green"
    }if(cont.x===10){
        cont.fillStyle="gold"
    }
    if(cont.y===10){
        cont.fillStyle="blue"
    }

    cont.x+=xdelta
    cont.y+=ydelta

}

function   dr  (){
    content.clearRect(0,0,bord.width,bord.height)
   content.fillStyle=(cont.fillStyle)
    content.fillRect(cont.x,cont.y,cont.width,cont.height)
}


function loop(){

    requestAnimationFrame(loop)
    update()
     dr()
}

loop()



user_data.innerText=user.name