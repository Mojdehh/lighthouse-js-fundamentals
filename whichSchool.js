const whichSchool  = function (age) {
  if (age >= 1 && age < 13) {
    return "Elementary School"
  } else if (age >= 13 && age <= 18) {
    return "Secondary School"
  } else {
    return "Lighthouse Labs"
  }
}

console.log("I am 9. Which school should I go?")
console.log (whichSchool(9))
console.log("I am 15. Which school should I go?")
console.log (whichSchool(15))
console.log("I am 27. Which school should I go?")
console.log (whichSchool(27))
