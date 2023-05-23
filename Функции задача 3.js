
const counter = function (a, b) {
    let num = a;
    let timer = setInterval(function() {
        if (num >= b) {
          clearInterval(timer)
        }
        console.log(num);
        num++
    }, 1000)
  }
  counter(5, 15)