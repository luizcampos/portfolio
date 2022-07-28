/* Effect write my name */
var labelName = document.querySelector('#txtName');
var frase = "Prazer, Luiz Campos!";
var numEnd = 0;

var writeName = setInterval(function(){
    numEnd++;
    if(numEnd < 20){
        labelName.innerHTML = frase.substring(0,numEnd) + "|";
    } else{
        labelName.innerHTML = frase.substring(0,numEnd);
        stopInterval();
    }
}, 80);

function stopInterval(){
    clearInterval(writeName);
}

/* Button voltar ao topo */

var btnTopo = document.querySelector('#btnVoltarAoTopo');

btnTopo.addEventListener('click', function(){
    window.scrollTo(0,0);
})

/* Button modes layout */

var btnModes= document.querySelector('#btnModesLayout');

btnModes.addEventListener('click', function(){
    document.querySelector('#contactSection').classList.toggle('modeLigth');
    document.querySelector('.myProjects').classList.toggle('modeLigth');
    document.querySelector('body').classList.toggle('modeLigth');
    document.querySelector('#textContact1').classList.toggle('modeLigth');
    document.querySelector('#textContact2').classList.toggle('modeLigth');
    document.querySelector('#textContact3').classList.toggle('modeLigth');
    document.querySelector('#textContact4').classList.toggle('modeLigth');
    document.querySelector('#textContact5').classList.toggle('modeLigth');
    document.querySelector('#textContact6').classList.toggle('modeLigth');
    document.querySelector('#profissionalSection').classList.toggle('borderModeLigth');
})




