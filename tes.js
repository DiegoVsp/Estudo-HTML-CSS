// function oddNumbers(l, r) {
//   let impares = []
//   for(let i = l; i<=r; i++) {
//       if(i%2 ===0){
//           impares.push(i)
//       }
//   }
//   return impares

// }
// console.log(oddNumbers(2,5))

// let ar = [2,1,4,5]
// function simpleArraySum(ar) {
//   let a = ar.reduce(function(acc,atual) {
//     return acc+=atual
//   })
//   return a
// }
// console.log(simpleArraySum(ar))

// let a = [2,3,4,5]
// let b = [1,6,5,3]
// function compararArray(a,b){
//   let r = []
//   for(let i = 0; i<a.length;i++){
//       if(a[i] > b[i]){
//         r.push(a[i])

//       }else{
//         r.push(b[i])
//       }
//   }
//   return r
// }
// console.log(compararArray(a,b))
function fibonacci(n) {
  var n1 = 0
  var n2= 1
  var res = [0]
  for(var i = 0;i < n; i++) {
    let r = n1+n2
    n2=n1
    n1=r
    res.push(r)
  }
  return res
}

console.log(fibonacci(4))