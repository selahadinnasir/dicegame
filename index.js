
 dicePlace();
function randomNo() {
    var x = Math.random()*6;
    x=Math.floor(x);
    console.log(x+1);
    return x+1;
}

function dicePlace(){
    
    var y= randomNo();
    // from angela 
    // var randomDiceImage = "images/dice"+y+ "png";
    // so you can easily select the Image

     
    if (y===1){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img12").setAttribute("src","images/dicea.png");
        document.querySelector(".img8").setAttribute("src","images/dicea.png");
        document.querySelector(".img9").setAttribute("src","images/dicea.png");
        document.querySelector(".img10").setAttribute("src","images/dicea.png");
        document.querySelector(".img11").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="player 2 win the game ";

        
    }
    else if (y===2){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img2").setAttribute("src","images/dicea.png");
        document.querySelector(".img10").setAttribute("src","images/dicea.png");
        document.querySelector(".img12").setAttribute("src","images/dicea.png");
        document.querySelector(".img9").setAttribute("src","images/dicea.png");
        document.querySelector(".img7").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="player 2 win the game";

    }
    else if (y===3){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img2").setAttribute("src","images/dicea.png");
        document.querySelector(".img3").setAttribute("src","images/dicea.png");
        document.querySelector(".img11").setAttribute("src","images/dicea.png");
        document.querySelector(".img8").setAttribute("src","images/dicea.png");
        document.querySelector(".img9").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="Draw the game";

    }
    else if (y===4){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img2").setAttribute("src","images/dicea.png");
        document.querySelector(".img3").setAttribute("src","images/dicea.png");
        document.querySelector(".img4").setAttribute("src","images/dicea.png");
        document.querySelector(".img11").setAttribute("src","images/dicea.png");
        document.querySelector(".img10").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="player 1 win the game";


    }
    else if (y===5){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img2").setAttribute("src","images/dicea.png");
        document.querySelector(".img3").setAttribute("src","images/dicea.png");
        document.querySelector(".img4").setAttribute("src","images/dicea.png");
        document.querySelector(".img5").setAttribute("src","images/dicea.png");
        document.querySelector(".img9").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="player 1 win the game";

    }
    else if (y===6){
        document.querySelector(".img1").setAttribute("src","images/dicea.png");
        document.querySelector(".img2").setAttribute("src","images/dicea.png");
        document.querySelector(".img3").setAttribute("src","images/dicea.png");
        document.querySelector(".img4").setAttribute("src","images/dicea.png");
        document.querySelector(".img5").setAttribute("src","images/dicea.png");
        document.querySelector(".img6").setAttribute("src","images/dicea.png");
        document.querySelector("h1").innerHTML="player 1 win the game";


    }
    
 
}



