const containerPad = document.getElementsByClassName('container');
const rowPad = document.getElementById('rowPad');
const botones = {
    boton1: 'A',
    boton2: 'B',
    boton3: 'C',
    boton4: 'D',
    boton5: 'E',
    boton6: 'F',
    boton7: 'G',
    boton8: 'B'
  };

function selectNotePad (note) {
    // Como puede hacer qeu por medio de esta funcion suene un audio
    console.log(note);
    
}
createBtnPad(botones);

function createBtnPad(btnPad){
    for (const key in btnPad) {
        const buttonPads  = document.createElement('button');
        buttonPads.className = 'col-3 container-notes';
        buttonPads.type = 'button'
        buttonPads.id = key;
        buttonPads.onclick = () => selectNotePad(btnPad[key]);
        buttonPads.textContent = btnPad[key];
        rowPad.appendChild(buttonPads);
    }
}

const selectModePad = (mode) => {

}