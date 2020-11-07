var valor;
function botao(num){
  valor = document.calc.visor.value +=num;
}
function calcula(){
  resultado = eval(valor).toLocaleString('pt-br');

  document.calc.visor.value = resultado
}
function reseta() {
  valor = document.calc.visor.value ='';
}