const mainOptions = document.getElementById('main-options');
const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');
const cardFour = document.getElementById('card-four');
const closeButtons = document.getElementsByClassName('close');

cardOne.onclick = function(){
    mainOptions.style.display = 'none';
    document.getElementById('option-one').style.display = 'block';
}

cardTwo.onclick = function(){
    mainOptions.style.display = 'none';
    document.getElementById('option-two').style.display = 'block';
}

cardThree.onclick = function(){
    mainOptions.style.display = 'none';
    document.getElementById('option-three').style.display = 'block';
}

cardFour.onclick = function(){
    mainOptions.style.display = 'none';
    document.getElementById('option-four').style.display = 'block';
}

closeButtons[0].onclick = function(){
    mainOptions.style.display = 'grid';
    document.getElementById('option-one').style.display = 'none';
}

closeButtons[1].onclick = function(){
    mainOptions.style.display = 'grid';
    document.getElementById('option-two').style.display = 'none';
}

closeButtons[2].onclick = function(){
    mainOptions.style.display = 'grid';
    document.getElementById('option-three').style.display = 'none';
}

closeButtons[3].onclick = function(){
    mainOptions.style.display = 'grid';
    document.getElementById('option-four').style.display = 'none';
}