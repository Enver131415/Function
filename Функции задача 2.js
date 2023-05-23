function sumNumber(firstnum) {
  return function(secondnum) {
    return console.log(firstnum + secondnum)
  }
}
sumNumber(2)(3)