const mainDiv = document.getElementById('main');

function GetColorBack(event){
    const buttonid = event.target.id;
    document.getElementById(buttonid).classList.toggle('gray');
}

for (let i = 1; i <= 20; i++){
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `num-${i}`;
    button.style.top = `${Math.random() * 100}vh`;
    button.style.left = `${Math.random() * 100}vw`;
    mainDiv.appendChild(button);

    button.addEventListener('click',GetColorBack);
}