import 'bootstrap';
import '../css/styles.scss';
import '../assets/harley.jpg'

const elModalOpen = document.querySelector('#modal-open');
elModalOpen.addEventListener('click', () =>{
   $('#my-modal').modal('show');
});

const elModalClose = document.querySelector('#modal-close');
elModalClose.addEventListener('click', () =>{
  $('#my-modal').modal('hide');
});