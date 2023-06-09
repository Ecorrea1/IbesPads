const containerPad = document.getElementsByClassName('container');
const rowPad = document.getElementById('rowPad');
let playbackPad = false;
let actualPad;
const botones = {
  boton1: 'A',
  boton2: 'A#',
  boton3: 'B',
  boton4: 'C',
  boton5: 'C#',
  boton6: 'D',
  boton7: 'D#',
  boton8: 'E',
  boton9: 'F',
  boton10: 'F#',
  boton11: 'G',
  boton12: 'G#'
};

function selectNotePad (note, typePad = 'Atmospheric', format = 'opus') {
  const regex = note.replace('#', 'sharp');
  const audio = new Audio(`assets/audios/${regex}-${typePad}.${format}`);
  if (actualPad && playbackPad) {
    playbackPad = false;
    return actualPad.pause();
  }
  playbackPad = true;
  audio.loop = true;
  audio.addEventListener('ended', () =>{
    this.currentTime = 0;
    this.play();
  }, false);
  audio.play();
  actualPad = audio;

}

const selectModePad = (mode) => {

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