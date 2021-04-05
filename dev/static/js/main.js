'use strict';

const $modal = document.getElementById('modal-video');
const $modalClose = document.getElementById('modal-close');
const $modalShadow = document.querySelector('.modal-backdrop');
const $aboutBtn = document.getElementById('about-btn');

const $commentsBlock = document.querySelector('#people .people__list');

$aboutBtn.addEventListener('click', () => {
  $modal.classList.add('show');
  $modalShadow.classList.add('show');
});

$modalClose.addEventListener('click', () => {
  $modal.classList.remove('show');
  $modalShadow.classList.remove('show');
});

$commentsBlock.addEventListener('click', (evt) => {
  const $liCurrent = document.querySelector(`#people li.people__item.active`);
  const $elem = evt.target;
  let id;

  if (evt.target.tagName === "IMG") {
    id = $elem.getAttribute('data-id');
  }

  const $liClicked = document.querySelector(`#people li.people__item[data-id="${id}"]`);

  $liCurrent.classList.remove('active');
  $liClicked.classList.add('active');
})

