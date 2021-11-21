'use strict';

// sp-menu
const menu= document.getElementById('menu');
const mask = document.getElementById('mask');;
const modal = document.getElementById('modal');
const close = document.getElementById('close');

menu.classList.remove('hidden');
mask.classList.add('hidden');
modal.classList.add('hidden');

menu.addEventListener('click',()=>{
    menu.classList.add('hidden');
    mask.classList.remove('hidden');
    modal. classList.remove('hidden');
});

close.addEventListener('click',()=>{
    menu.classList.remove('hidden');
    mask.classList.add('hidden');
    modal.classList.add('hidden');
});