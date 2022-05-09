const canvas = document.getElementById("shapes");
const ctx = canvas.getContext('2d');
console.log(ctx);

ctx.clearRect(0, 0, 1000, 650)


const beach = {
    x: 0,
    y: 0,
    with: 1000,
    height: 650
}

const volcano = {
    x: 300,
    y: 1,
    with: 500,
    height: 450
}

const birds = [
    {
        x: 50,
        y: 100,
        with: 75,
        height: 75
    },
    {
        x: 350,
        y: 150,
        with: 100,
        height: 100
    },
]

const birds2 = {
        x: 700,
        y: 250,
        with: 100,
        height: 100
}



const birdImage = new Image()
birdImage.src = './images/Birds_1.png';


const birdImage2 = new Image()
birdImage2.src = './images/Birds_2.png';


const volcanoImg = new Image();
volcanoImg.src = './images/volcano.png';

const BeachImg = new Image();
BeachImg.src = './images/beach.png';


window.onload = function () {
    birds.forEach(element => {
        ctx.drawImage(birdImage, element.x, element.y, element.with, element.height);
    });
  
    ctx.drawImage(birdImage2, birds2.x, birds2.y, birds2.with, birds2.height);
    ctx.drawImage(volcanoImg, volcano.x, volcano.y, volcano.with, volcano.height);
    ctx.drawImage(BeachImg, beach.x, beach.x, beach.with, beach.height);
}

//
function moveBirds() {
    ctx.clearRect(0, 0, 1000, 650);
    birds2.x = birds2.x + 10;
    if (birds2.x > 1000) {
        birds2.x = -20;
    }
    
    birds.forEach(element => {
        ctx.drawImage(birdImage, element.x, element.y, element.with, element.height);
    });
  
    ctx.drawImage(birdImage2, birds2.x, birds2.y, birds2.with, birds2.height);
    ctx.drawImage(volcanoImg, volcano.x, volcano.y, volcano.with, volcano.height);
    ctx.drawImage(BeachImg, beach.x, beach.x, beach.with, beach.height);

}

setTimeout(function () {
    let interval = setInterval(moveBirds, 100);
  }, 1000)





