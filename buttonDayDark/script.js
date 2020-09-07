const b = document.body
const toggleBtn = document.querySelector('.botao')
toggleBtn.addEventListener('change', (e) => {
 e.target.checked ? b.className ='dark' : b.className='light'
}, false)

