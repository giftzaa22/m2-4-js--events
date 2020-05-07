const mainDiv = document.getElementById('main');

function OnClick(event){
    const buttonid = event.target.id;
    document.getElementById(buttonid).classList.add('gray');
}

for (let i = 1 ; i <= 20 ; i++ ){
    const button = document.createElement('button');
    button.innerText = i ;
    button.id = `num-${i}`;
    mainDiv.appendChild(button);

    button.addEventListener('click' , OnClick);
}