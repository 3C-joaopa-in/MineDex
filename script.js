//João Pedro Santos Araujo 3C.12.08.2025//

document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessbilidade = document.getElementById('botao-acessibilidade')
    const opçoesDeAcessbilidade = document.getElementById('opçoes-acessibilidade')
    const alternaContraste = document.getElementById('alterna-contraste')

    botaoDeAcessbilidade.addEventListener("click", function(){
        botaoDeAcessbilidade.classList.toggle('rotaçao-botao');
        opçoesDeAcessbilidade.classList.toggle('apresenta-lista');
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })  

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })

})



let next = document.getElementById('antes');
let prev = document.getElementById('depois');
let image = document.querySelector('.imagens');
let itens = document.querySelectorAll('.imagens .item');
let contents = document.querySelectorAll('.conteudo .item');

let rotate = 0;
let active = 0;
let countItem = itens.length;
let rotateAdd = 360 / countItem;

function show() {
    image.style.setProperty('--rotate', rotate + 'deg');

    itens.forEach((item, key) => {
        if (key == active) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    contents.forEach((content, key) => {
        if (key == active) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

function nextSlider() {
    active = (active + 1) % countItem;
    rotate += rotateAdd;
    show();
}
next.onclick = nextSlider;

function prevSlider() {
    active = (active - 1 + countItem) % countItem;
    rotate -= rotateAdd;
    show();
}
prev.onclick = prevSlider;
show();

document.querySelectorAll('.popup-trigger').forEach(trigger => {
  const popup = trigger.nextElementSibling;
  
  trigger.addEventListener('mouseenter', () => {
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
  });
  
  trigger.addEventListener('mouseleave', () => {
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
  });
});

const showMobs = document.querySelectorAll(".show-mob");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");

const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupImage = document.getElementById("popup-image");
const popupSubtitle = document.getElementById("popup-subtitle");

showMobs.forEach((mob) => {
    mob.addEventListener("click", (e) => {
        e.preventDefault();

        const title = mob.getAttribute("data-title");
        const subtitle = mob.getAttribute("data-subtitle");
        const text = mob.getAttribute("data-text");
        const imgSrc = mob.getAttribute("data-img");

        popupTitle.textContent = title;
        popupSubtitle.textContent = subtitle;
        popupImage.src = imgSrc;

        const textItems = text.split('--').map(item => item.trim());
        let htmlList = '<ul>';
        textItems.forEach(item => {
            if (item) {
                htmlList += `<li>${item}</li>`;
            }
        });
        htmlList += '</ul>';

        popupText.innerHTML = htmlList;

        popupContainer.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    popupContainer.classList.remove("active");
});









