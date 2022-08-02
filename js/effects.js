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

//Cards projects

var projects = {
    title: ['Palette Generator', 'Ignite Lab', 'Quiz HP', 'Calculator', 'API Restful myDreamBox', 'Fazendo Arte', 'Monitore', 'Física não é um monstro'],
    imageTop: [
        './img/cards/generator-photo.png',
        './img/cards/ignite-lab-photo.png',
        './img/cards/quiz-hp-photo.png',
        './img/cards/calculator-photo.png',
        './img/cards/mydreambox.png',
        './img/cards/fazendo-arte-photo.png',
        './img/cards/monitore-photo.png',
        './img/cards/fneum-photo.png'],
    description: [
        'Um gerador de paleta de cores prático para facilitar a vida dos designers',
        'Projeto feito durante o evento da Rocketseat, com foco em React',
        'Um quiz rápido sobre a história da melhor saga de todos os tempos',
        'Calculadora com as funcionalidades tradicionais e design minimalista',
        'API simples com CRUD completo para uma aplicação de criação de metas financeiras pessoais',
        'Gerenciamento, conteúdo e estilização do site na plataforma NuvemShop',
        'Projeto para auxiliar professores na avaliação e no acompanhamento de grupos acadêmicos',
        'Projeto com app híbrido para mobile e fórum para dúvidas na matéria de física'],
    status: ['em andamento', 'finalizado', 'finalizado', 'em andamento', 'finalizado', 'finalizado', 'finalizado', 'finalizado'],
    about: [
        'Novas funcionalidades surgirão em breve!',
        'Foi o meu primeiro contato real com ReactJS, o que me motivou ainda mais!',
        'A minha saga favorita foi tema do primeiro projeto pessoal com JavaScript',
        'Novas funcionalidades surgirão em breve!',
        'Apesar de ter sido um desafio de início, consegui desenvolver e captar bastante conteúdo.',
        'Por ser criado em uma plataforma específica, não tive contato com a criação inicial do código.',
        'TCC do curso de graduação Análise e desenvolvimento de sistemas desenvolvido por mim e pelo meu amigo Douglas Kurotaki.',
        'TCC do curso técnico em informática para auxiliar os alunos no estudo da física.'],
    techs: [
        ['HTML5', 'CSS3', 'JavaScript'],
        ['HTML5', 'CSS3', 'JavaScript', 'React'],
        ['HTML5', 'CSS3', 'JavaScript'],
        ['HTML5', 'CSS3', 'JavaScript'],
        ['HTML5', 'CSS3', 'PHP', 'Laravel'],
        ['HTML5', 'CSS3'],
        ['HTML5', 'CSS3', 'JavaScript', 'C#', 'MySQL'],
        ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
    ],
    linkWeb: [
        'https://palette-generator-kappa.vercel.app/',
        'https://ignite-lab-react-gamma.vercel.app/',
        'https://quiz-hp-wine.vercel.app/',
        'https://calculator-inky-zeta.vercel.app/',
        '',
        'https://fazendoarteonline.com.br',
        '',
        ''
        ],
    linkGitub: [
        'https://github.com/luizcampos/palette-generator',
        'https://github.com/luizcampos/ignite-lab-react',
        'https://github.com/luizcampos/quiz-hp',
        'https://github.com/luizcampos/calculator',
        'https://github.com/luizcampos/my-dream-box-api',
        '',
        'https://github.com/luizcampos/monitore',
        'https://github.com/luizcampos/fisica-nao-e-um-monstro']
}

const areaCards = document.querySelector('#cardsArea');
var newDiv= "";

for(var i = 0; i < projects.title.length; i++){
    newDiv += `
        <div class="card col-sm-12 col-md-5 col-xl-3 col-lg-3">
            <img src="${projects.imageTop[i]}" class="card-img-top" alt="Imagem da tela do projeto ${projects.title[i]}" title="${projects.title[i]}">
            <div class="card-body">
                <h5 class="card-title">${projects.title[i]}
                    <button type="button" class="circleInfo hideMobile" data-toggle="tooltip" data-placement="top" title="${projects.about[i]}">?</button>
                </h5>
                <p class="card-text">${projects.description[i]}.</p>`
    
    if(projects.status[i] === 'finalizado'){
        newDiv += `<p><strong style="color: #32CD32;">STATUS: </strong> ${projects.status[i]}.</p>`
    } else{
        newDiv += `<p><strong style="color: #FFA500;">STATUS: </strong> ${projects.status[i]}.</p>`
    }

    for(var j = 0; j < projects.techs[i].length; j++){
        
        if(projects.techs[i][j] === 'CSS3'){
            newDiv += `<i class="fa-brands fa-css3-alt fa-2x animationIcons" title="${projects.techs[i][j]}"></i>`
        } else if(projects.techs[i][j] === 'JavaScript'){
            newDiv += `<i class="fa-brands fa-js-square fa-2x animationIcons" title="${projects.techs[i][j]}"></i>`
        } else if(projects.techs[i][j] === 'MySQL'){
            newDiv += `<i class="fa-solid fa-database fa-2x animationIcons" title="${projects.techs[i][j]}"></i>`
        } else if(projects.techs[i][j] === 'C#'){
            newDiv += `<i class="fa-solid fa-1x animationIcons" title="${projects.techs[i][j]}"><strong>C#</strong></i>`
        } else{
            newDiv += `<i class="fa-brands fa-${projects.techs[i][j].toLowerCase()} fa-2x animationIcons" title="${projects.techs[i][j]}"></i>`
        }
    }

    newDiv += 
    `<br/><br/>
    </div>
        <div class="card-footer">`
    
    if(projects.linkWeb[i] != '')
    {
        newDiv += `<a href="${projects.linkWeb[i]}" target="_blank" class="link">Acessar</a>`
    }

    if(projects.linkGitub[i] != '')
    {
        newDiv += `<a href="${projects.linkGitub[i]}" target="_blank" class="link">GitHub</a>`
    }
    
    newDiv += `</div></div>`
}
areaCards.innerHTML = newDiv;