var players=[];
var whoseTurn = 0;
var markers =['X','O'];
players[0] ="Denis";
players[1] ="Nikolay";

   var myaudio = $("#myaudio")[0];
   $("#game").mouseenter(function() {
         myaudio.play();
})

  $('#game').on('click', function(event){
          event.target.innerHTML = markers[whoseTurn];
toggle();
checkWinner();
})

function toggle(){
  if (whoseTurn == 0) whoseTurn=1;
  else whoseTurn = 0;

$('#who')[0].innerHTML="ходит" + " " + players[whoseTurn];
}

function checkWinner(){
  var allblock = $(".block")
 if(allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X'  && allblock[2].innerHTML == 'X') alert('победил' + " " + players[0])
 if(allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X'  && allblock[5].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X'  && allblock[9].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X'  && allblock[6].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X'  && allblock[7].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X'  && allblock[8].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X'  && allblock[8].innerHTML == 'X' ) alert('победил' + " " + players[0])
  if(allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X'  && allblock[6].innerHTML == 'X' ) alert('победил' + " " + players[0])

  if(allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O'  && allblock[2].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O'  && allblock[5].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[7].innerHTML == 'O' && allblock[8].innerHTML == 'O'  && allblock[9].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O'  && allblock[6].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O'  && allblock[7].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O'  && allblock[8].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O'  && allblock[8].innerHTML == 'O' ) alert('победил' + " " + players[1])
  if(allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O'  && allblock[6].innerHTML == 'O' ) alert('победил' + " " + players[1])
}
