const buttonR = document.querySelector(".r");
const buttonP = document.querySelector(".p");
const buttonS = document.querySelector(".s");

buttonR.classList.add('buttonBackStyle');
buttonP.classList.add('buttonBackStyle');
buttonS.classList.add('buttonBackStyle');

buttonR.addEventListener("click", () => clicked(0) );
buttonP.addEventListener("click", () => clicked(1) );
buttonS.addEventListener("click", () => clicked(2) );

const c1 = document.querySelector('#umove');
const c2 = document.querySelector('#cmove');
const c3 = document.querySelector('.score');

const resetB = document.querySelector('.reset');
resetB.addEventListener("click", ()=>{
    score.loss = 0;
    score.won = 0;
    score.tie = 0;
    showSelections(1,1);
})
const score = {
    won : 0,
    loss: 0,
    tie: 0
}

function clicked(item){
    const rnd = parseInt((Math.random() * 10) / 3) ;
    if(rnd == 3){
        rnd = 2;
    }
    console.log(rnd);
    console.log(item);
    if(item == rnd) {
       score.tie++;
        // alert("match is tie \n" + `score: ${score.won} win, ${score.loss} loss, ${score.tie} tie. ` )
    }else if(item > rnd){
        if(item == 2 && rnd == 0){
            score.loss++;
        }else{
            score.won++;
        }
        // alert("you won\n" + `score: ${score.won} win, ${score.loss} loss, ${score.tie} tie. `);
    }else{
        if(item == 0 && rnd == 2){
            score.win++;
        }else{
            score.loss++;
        }
        // alert("you loss\n" + `score: ${score.won} win, ${score.loss} loss, ${score.tie} tie. `);
    }
    showSelections(item, rnd);
}

function showSelections(index1, index2){
    var srcU;
    var srcC;
    if(index1 == 0){
    srcU = './rock-emoji.png';
    }else if(index1 == 1){
        srcU = './paper-emoji.png';
    }else{
        srcU = './scissors-emoji.png';
    }
    if(index2 == 0){
        srcC = './rock-emoji.png';
        }else if(index2 == 1){
            srcC = './paper-emoji.png';
        }else{
            srcC = './scissors-emoji.png';
        }
    

    c1.src = srcU;
    c2.src = srcC;
    c3.innerHTML = `Score : Win[${score.won}], Loss[${score.loss}], Tie[${score.tie}]`
    // const c4 = document.createElement('h1');
    // const c5 = document.createElement('h1');
    
    
    // c1.appendChild(document.createTextNode('User'));
    // c4.appendChild(document.createTextNode('Computer'));
    // c5.appendChild(document.createTextNode('VS'));
    
    // c1.classList.add('heading');
    // c5.classList.add('heading');
    // c4.classList.add('heading');
    // c2.classList.add('selected');
    // c3.classList.add('selected');

    // document.body.appendChild(c1);
    // document.body.appendChild(c2);
    // document.body.appendChild(c5);
    // document.body.appendChild(c3);
    // document.body.appendChild(c4);

}