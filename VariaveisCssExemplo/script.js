const $body = document.body
const $toggleButton = document.querySelector('.toggle-theme__control')
$toggleButton.addEventListener('change', toggleTheme, false)
// dark theme
function toggleTheme(e) {
 return e.target.checked 
 	? $body.className = 'theme-dark' 
	: $body.className = 'theme-light'
}

$body.addEventListener('mousemove', (e) => {
  $body.style.setProperty('--move-x', `${e.clientX}px`)
  $body.style.setProperty('--move-y', `${e.clientY}px`)
})