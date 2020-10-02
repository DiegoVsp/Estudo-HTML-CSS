// function solution(number) {
//   let soma = [];
  
//   for(let i = 0; i< number.length;i ++){
//     if(number[i]% 3 == 0) {
//       soma.push(number[i])
//     }else if(number[i]%5 == 0) {
//       soma.push(number[i])
//     }
//   }
//   let res = soma.reduce((acc,atual) => {
//     return acc+=atual
//   })
//   return res

// }
function solution(number) {
  let soma = 0;
  
  for(let i = 0; i< number.length;i ++){
    
    if(number[i]% 3 == 0) {
      soma+=number[i];
    }else if(number[i]%5 == 0) {
      soma+=number[i];
    }
  }
  
  return soma

}
let array = [-4,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(solution(array))