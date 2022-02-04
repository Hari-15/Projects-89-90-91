player1_name = localStorage.getItem("Player 1");
player2_name = localStorage.getItem("Player 2");
console.log('Player 1: ' + player1_name);
console.log('Player 2: ' + player2_name);

player1_score = 0;
player2_score = 0;

question_turn = "Player1";
answer_turn = "Player2";

document.getElementById('player1_name').innerHTML = player1_name + ":";


function Send() {
    first_number = document.getElementById('first_number').value;
    second_number = document.getElementById('second_number').value;
    answer = parseInt(first_number) * parseInt(second_number);
    console.log(answer);

    question = "<h4>" + first_number + "X" + second_number + "</h4>";
    input_box = "<br> <input type = 'number' id = 'input' placeholder = 'Enter Number' class = 'form-control'> ";
    check_button = "<br> <button class = 'btn btn-success' onclick = 'Check();'> Check </button>";

    row = question + input_box + check_button;
    document.getElementById('output').innerHTML = row;

    document.getElementById('first_number').value = "";
    document.getElementById('second_number').value = "";
}