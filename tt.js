// var posicao = 0;
// var valor =0;
// var total = 0;

// for(posicao =1;posicao<=10;posicao+=2){
//   valor=posicao
//   if(posicao % 2 == 0){
//     total = total+valor
//   }
// }
// console.log(total)
// var a;
// var b;
// var c;
// var soma;

// a=10;
// b=a;
// c=2;
// soma =0

// while(c<b){
// soma = soma +c
// c=c+1;
// }
// console.log(a)


class CarroTunado {
  nome;
  cor;
}

function trocaAtributosCarro(carroTunado){
  carroTunado.cor ="Branco";
  carroTunado=new CarroTunado();
  carroTunado.nome="Uno de firma com escada";
}

var carroTunado1=new CarroTunado();
carroTunado1.nome ="Ferrar 488 Gtb";
carroTunado1.cor ="vermelho";

var carroTunado2=new CarroTunado();
carroTunado2.nome ="McLarem GT";
carroTunado2.cor ="Amarelo";

console.log('Nome do carro tunado 1 '+carroTunado1.nome)
console.log('Cor do carro tunado 1 '+carroTunado1.cor)

console.log('Nome do carro tunado 2 '+carroTunado2.nome)
console.log('Cor do carro tunado 2 '+carroTunado2.cor)

trocaAtributosCarro(carroTunado2)

console.log('Nome do carro tunado 2 '+carroTunado2.nome)
console.log('Cor do carro tunado 2 '+carroTunado2.cor)

