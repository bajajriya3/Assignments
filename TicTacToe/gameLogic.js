window.addEventListener('load',bindEvents);

//false -> X
//true -> O
var flag = false;
var clickedArray = new Array(9);
var winSequence=['123', '456', '789', '147', '258', '369', '159', '357'];

function bindEvents(){
    for(var k = 0; k < 9; k++){
        clickedArray[k] = 0;
    }


    document.querySelector('#b1').addEventListener('click',buttonClick);
    document.querySelector('#b2').addEventListener('click',buttonClick);
    document.querySelector('#b3').addEventListener('click',buttonClick);
    document.querySelector('#b4').addEventListener('click',buttonClick);
    document.querySelector('#b5').addEventListener('click',buttonClick);
    document.querySelector('#b6').addEventListener('click',buttonClick);
    document.querySelector('#b7').addEventListener('click',buttonClick);
    document.querySelector('#b8').addEventListener('click',buttonClick);
    document.querySelector('#b9').addEventListener('click',buttonClick);
    document.querySelector('#playAgain').addEventListener('click',playAgain);
    console.log('bind events');
}

function playAgain(){
    location.reload();
}

function buttonClick(){
    var id = "b" + this.value;
    var value = parseInt(this.value);

    if(clickedArray[value-1] == 1)
        return;

    if(flag == false){
        document.getElementById(id).innerHTML = 'X';
        flag = true;
        document.getElementById('p1').className = 'btn btn-warning';
        document.getElementById('p2').className = 'btn btn-danger';
    }
    else{
        document.getElementById(id).innerHTML = 'O';
        flag = false;
        document.getElementById('p1').className = 'btn btn-danger';
        document.getElementById('p2').className = 'btn btn-warning';
    }
    clickedArray[value-1] = 1;
    checkResult();
}

function checkResult(){
    var f = false;
    for(var k = 0; k < 9; k++){
        if(clickedArray[k]==0){
            f = true;
            break;
        }
    }

    if(f == false){
        document.getElementById('p1').innerHTML = '<b>-</b>';
        document.getElementById('p1').className = 'btn btn-warning';
        document.getElementById('p2').innerHTML = '<b>-</b>';
        document.getElementById('p2').className = 'btn btn-warning';
    }

    if(flag == true){
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 3; j++){
                var id = "b" + winSequence[i].charAt(j);
                console.log(id);
                if(clickedArray[winSequence[i][j]-1] == 1 && document.getElementById(id).innerHTML == 'X')
                    continue;
                else
                    break;
            }
            if(j==3){
                document.getElementById('p1').innerHTML = '<b>Winner!!</b>';
                document.getElementById('p1').className = 'btn btn-primary';
                for(var k = 0; k < 9; k++){
                    clickedArray[k] = 1;
                }
                for(var k = 0; k < 3; k++){
                    document.getElementById("b"+winSequence[i][k]).className = 'btn btn-primary';
                    document.getElementById("b"+winSequence[i][k]).style = 'font-weight:bolder;font-size:60px;';
                }
                return;
            }
        }
    }
    else{
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 3; j++){
                var id = "b" + winSequence[i].charAt(j);
                console.log(id);
                if(clickedArray[winSequence[i][j]-1] == 1 && document.getElementById(id).innerHTML == 'O')
                    continue;
                else
                    break;
            }
            if(j==3){
                document.getElementById('p2').innerHTML = '<b>Winner!!</b>';
                document.getElementById('p2').className = 'btn btn-primary';
                for(var k = 0; k < 9; k++){
                    clickedArray[k] = 1;
                }
                for(var k = 0; k < 3; k++){
                    document.getElementById("b"+winSequence[i][k]).className = 'btn btn-primary';
                    document.getElementById("b"+winSequence[i][k]).style = 'font-weight:bolder;font-size:60px;';
                }
                return;
            }
        }
    }
}