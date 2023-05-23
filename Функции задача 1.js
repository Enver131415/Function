function numberWhat(num) {
  let zero = 0;
  if (num <= 1 || num > 1000) {
    return console.log('Ответ неверный');    
  }
 for (let i = 2; i <= num; i++) {
   if (num % i === 0) {
     zero++
   }  
 }
  if (zero > 1) {
    console.log('Составное Число')
  } else {
    console.log('Простое число')
  }
  
}
numberWhat(37)