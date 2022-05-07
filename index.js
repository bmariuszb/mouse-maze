var border;
var left=413;
var top=25;
var startStop=2;
var tens=0;
var seconds=0;
var min=0;
var interval;

function createWall(){
    border=document.createElement("button");
    border.className="wall";
    border.style.width=10+"px";
    border.style.height=10+"px";
}


function gameOver(){
    if(startStop==1){
        clearInterval(interval);
        document.getElementsByTagName("p")[0].remove();
        let ded=document.createElement("p");
        ded.className="text";
        ded.innerHTML="You lost :(<br/> To try again move your mouse on orange block. Have fun.";
        document.body.appendChild(ded);
        startStop=0;
        createStart();
    }
    
}

function youWin(){
    if(startStop==1){
        let elements=document.getElementsByTagName("button");
    while(elements.length>0){
        elements[0].remove();
    }
    elements=document.getElementsByTagName("p");
    while(elements.length>0){
        elements[0].remove();
    }
    let header=document.createElement("h1");
    header.innerHTML=timem+":"+times+":"+timet;
    document.body.appendChild(header);
    header=document.createElement("button");
    header.innerHTML="PLAY AGAIN";
    header.className="play";
    header.addEventListener("click", tryAgain);
    document.body.appendChild(header);
    }
}

function tryAgain(){
    deleteMain();
    // start button
    createStart();
    // end button
    createEnd();
    // text
    drawMaze();
}

function startTimer(){
    tens=0;
    seconds=0;
    min=0;
    if(startStop==0){
        if(document.getElementsByTagName("p").length==1)
        document.getElementsByTagName("p")[0].remove();
    }

    if(document.getElementsByTagName("p").length==1)
        document.getElementsByTagName("p")[0].remove();

    let timer=document.createElement("p");
    document.body.appendChild(timer);
    interval=setInterval(function(){
        tens++;
        if(tens>99){
            seconds++;
            tens=0;
        }
        if(tens<10){
            timet="0"+tens;
        }
        else{
            timet=tens;
        }
        if(seconds>59){
            min++;
            seconds=0;
            timem="0"+min;
        }
        if(seconds<10){
            times="0"+seconds;
        }
        else{
            times=seconds;
        }
        if(min<10){
            timem="0"+min;
        }
        else{
            timem=min;
        }
        timer.innerHTML="TIME<br/>"+timem+":"+times+":"+timet;
        })
    document.getElementById("start").remove();
    startStop=1;//is counting
}

function startGame(){
    // delete main page
    deleteMain();
    // start button
    createStart();
    // end button
    createEnd();
    // draw map
    drawMaze();
    // text
    createText();
}

function deleteMain(){
    document.getElementsByTagName("h1")[0].remove();
    document.getElementsByTagName("button")[0].remove();
}

function createText(){
    let text=document.createElement("p");
    text.className="text";
    text.innerHTML="Rules are simple, move your mouse on the orange block to start, and then move your mouse on the pink block to win, but don't touch the green. Good luck!";
    document.body.appendChild(text);
}

function createStart(){
    createWall();
    border.addEventListener("mouseover", startTimer);
    border.id="start";
    border.style.position="fixed";
    border.style.left=left+10+"px";
    border.style.top=25+100+"px";
    border.style.width="40px";
    border.style.height="40px";
    document.body.appendChild(border);
}

function createEnd(){
    createWall();
    border.addEventListener("mouseover", youWin);
    border.id="end";
    border.style.position="fixed";
    border.style.left=left+660+"px";
    border.style.top=25+500+"px";
    border.style.width="40px";
    border.style.height="40px";
    document.body.appendChild(border);
}

function drawMaze(){
    let left=413;
    let top=25;
    for(var i=0;i<91;i++){
        //created element can only be append once so we create another
        createWall();
        border.addEventListener("mouseover", gameOver);
        border.id="w"+i.toString();
        border.style.position="fixed";
        document.body.appendChild(border);
    }
    var current=0;
    let topcurrent=top;
    // linia 0
    let wall=document.getElementById("w"+current.toString());;
    wall.style.left=left+"px";
    wall.style.height="690px";
    wall.style.top="25px";
        current++;
    // linia 1
    left+=50;
    for(var i=0;i<4;i++){
        wall=document.getElementById("w"+current.toString());
        wall.style.left=left+"px";
        current++;
    }
    // 1
    let height=40
    wall=document.getElementById("w"+(current-4).toString()).style;
    topcurrent+=50;
    wall.top=topcurrent+"px";
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=300;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=50;
    wall.height=height+"px";

    // linia 2
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=150;
    wall.top=topcurrent+"px";
    height=140;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";

    // linia 3
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=100;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=210;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+150;
    wall.top=topcurrent+"px";
    height=90;
    wall.height=height+"px";

    // linia 4
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    wall.top=topcurrent+"px";
    height=90;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=290;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+100;
    wall.top=topcurrent+"px";
    height=50;
    wall.height=height+"px";

    // linia 5
    left+=50;
    topcurrent=top;
    for(var i=0;i<4;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-4).toString()).style;
    topcurrent+=50;
    wall.top=topcurrent+"px";
    height=90;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=190;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";

    // linia 6
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=150;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+100;
    wall.top=topcurrent+"px";
    height=50;
    wall.height=height+"px";

    // linia 7
    left+=50;
    topcurrent=top;
    for(var i=0;i<5;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-5).toString()).style;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-4).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 4
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=90;
    wall.height=height+"px";
    // 5
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";

    // linia 8
    left+=50;
    topcurrent=top;
    for(var i=0;i<4;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-4).toString()).style;
    topcurrent+=90;
    wall.top=topcurrent+"px";
    height=50;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+110;
    wall.top=topcurrent+"px";
    height=140;
    wall.height=height+"px";

    // linia 9
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=50;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=190;
    wall.height=height+"px";

    // linia 10
    left+=50;
    topcurrent=top;
    for(var i=0;i<2;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=200;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=150;
    wall.height=height+"px";

    // linia 11
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+210;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=240;
    wall.height=height+"px";

    // linia 12
    left+=50;
    topcurrent=top;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=100;
    wall.top=topcurrent+"px";
    height=90;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+100;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+60;
    wall.top=topcurrent+"px";
    height=140;
    wall.height=height+"px";

    // linia 13
    left+=50;
    topcurrent=top;
    for(var i=0;i<4;i++){
        document.getElementById("w"+current.toString()).style.left=left+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-4).toString()).style;
    topcurrent+=50;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=260;
    wall.height=height+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=100;
    wall.height=height+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    topcurrent+=height+50;
    wall.top=topcurrent+"px";
    height=40;
    wall.height=height+"px";

    // linia 14
    left+=50;
    wall=document.getElementById("w"+current.toString());;
    wall.style.left=left+"px";
    wall.style.height="690px";
    wall.style.top="25px";
    current++;

    left=413;

    // wiersz 0
    wall=document.getElementById("w"+current.toString()).style;
    wall.width=710+"px";
    wall.top=top-10+"px";
    wall.left=left+"px";
    current++;

    // wiersz 1
    top+=40;
    for(var i=0;i<6;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    let width=60;
    let leftcurrent=left+50;
    wall=document.getElementById("w"+(current-6).toString()).style;
    wall.width=width+"px";
    wall.left=leftcurrent+"px";
    // 2
    wall=document.getElementById("w"+(current-5).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-4).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px"; 
    // 4
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 5
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";
    // 6
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=50;
    wall.width=width+"px";
    

    // wiersz 2
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    width=160;
    wall.width=width+"px";
    leftcurrent+=50;
    wall.left=leftcurrent+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+90;
    wall.left=leftcurrent+"px";
    width=210;
    wall.width=width+"px";

    // wiersz 3
    top+=50;
    leftcurrent=left;
    for(var i=0;i<4;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-4).toString()).style;
    leftcurrent+=100;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=160;
    wall.width=width+"px";

    // wiersz 4
    top+=50;
    leftcurrent=left;
    for(var i=0;i<2;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=200;
    wall.left=leftcurrent+"px";
    width=260;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";

    // wiersz 5
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=250;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+90;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";

    // wiersz 6
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=100;
    wall.left=leftcurrent+"px";
    width=50;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+150;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+300;
    wall.left=leftcurrent+"px";
    width=40;
    wall.width=width+"px";

    // wiersz 7
    top+=50;
    leftcurrent=left;
    for(var i=0;i<2;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=10;
    wall.left=leftcurrent+"px";
    width=40;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+300;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";

    // wiersz 8
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=350;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=40;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";

    // wiersz 9
    top+=50;
    leftcurrent=left;
    for(var i=0;i<5;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-5).toString()).style;
    leftcurrent+=50;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-4).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=50;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";
    // 4
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+50;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 5
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+140;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    

    // wiersz 10
    top+=50;
    leftcurrent=left;
    for(var i=0;i<2;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=50;
    wall.left=leftcurrent+"px";
    width=260;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=160;
    wall.width=width+"px";

    // wiersz 11
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=10;
    wall.left=leftcurrent+"px";
    width=50;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+90;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+190;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";

    // wiersz 12
    top+=50;
    leftcurrent=left;
    for(var i=0;i<3;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=250;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+60;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+90;
    wall.left=leftcurrent+"px";
    width=100;
    wall.width=width+"px";

    // wiersz 13
    top+=50;
    leftcurrent=left;
    for(var i=0;i<4;i++){
        document.getElementById("w"+current.toString()).style.top=top+"px";
        current++;
    }
    // 1
    wall=document.getElementById("w"+(current-4).toString()).style;
    leftcurrent+=50;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";
    // 2
    wall=document.getElementById("w"+(current-3).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=60;
    wall.width=width+"px";
    // 3
    wall=document.getElementById("w"+(current-2).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=110;
    wall.width=width+"px";
    // 4
    wall=document.getElementById("w"+(current-1).toString()).style;
    leftcurrent+=width+40;
    wall.left=leftcurrent+"px";
    width=210;
    wall.width=width+"px";

    // wiersz 14
    top+=50;
    wall=document.getElementById("w"+current.toString()).style;
    wall.top=top+"px";
    wall.width=710+"px";
    wall.left=left+"px";
}