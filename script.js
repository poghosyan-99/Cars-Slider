// BMW
let buttonBmw = document.querySelector('.button-bmw');
let imagesBmw = ['img2.jpg', 'img3.webp', 'img4.webp', 'img5.webp'];
let itemsBmw = document.querySelector('.items-bmw');
let sliderBmw = document.querySelector('.slider-bmw');
let xBmw = document.querySelector('.x-bmw');
let index = 0;

buttonBmw.addEventListener('click', openFuncBmw);
sliderBmw.addEventListener('click', sliderFuncBmw);
xBmw.addEventListener('click', removeSliderBmw);


imagesBmw.forEach((img,i)=>{
    itemsBmw.innerHTML += `<div class="item" onclick="setImageBmw(${i})" style='background-image:url(images/${img})'></div>`
});


function sliderFuncBmw(value){
    if(value === 'right'){
        index++;
        if(index === imagesBmw.length){
            index = 0;
        }
    }
    else if(value === 'left'){
        index--;
        if(index < 0){
            index = imagesBmw.length-1;
        }
    }
    sliderBmw.style.backgroundImage = `url(images/${imagesBmw[index]})`
}

function setImageBmw(i){
    sliderBmw.style.backgroundImage = `url(images/${imagesBmw[i]})`;
    index = i;
}


function openFuncBmw(){
    sliderBmw.classList.add('active');
}

function removeSliderBmw(){
    sliderBmw.classList.remove('active');
    sliderBmw.style.transition = 'all 2s ease';
}



// MERC
let buttonMerc = document.querySelector('.button-merc');
let imagesMerc = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
let itemsMerc = document.querySelector('.items-merc');
let sliderMerc = document.querySelector('.slider-merc');
let xMerc = document.querySelector('.x-merc');


sliderMerc.addEventListener('click', sliderFuncMerc);
buttonMerc.addEventListener('click', openFuncMerc);
xMerc.addEventListener('click', removeSliderMerc);


imagesMerc.forEach((img,i)=>{
    itemsMerc.innerHTML += `<div class="item" onclick="setImageMerc(${i})" style='background-image:url(images1/${img})'></div>`
});


function sliderFuncMerc(value){
    if(value === 'right'){
        index++;
        if(index === imagesMerc.length){
            index = 0;
        }
    }
    else if(value === 'left'){
        index--;
        if(index < 0){
            index = imagesMerc.length-1;
        }
    }
    sliderMerc.style.backgroundImage = `url(images1/${imagesMerc[index]})`;
}

function setImageMerc(i){
    sliderMerc.style.backgroundImage = `url(images1/${imagesMerc[i]})`;
    index = i;
}


function openFuncMerc(){
    sliderMerc.classList.add('active');
}

function removeSliderMerc(){
    sliderMerc.classList.remove('active');
    sliderMerc.style.transition = 'all 2s ease';
}