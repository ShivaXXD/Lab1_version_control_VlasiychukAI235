let num = 5; 

function fizzBuzz(num){
    for(let i = 1;i <= num;i++){
      let is = String(i)
    if(i % 3 == 0 && i % 7 == 0){
        console.log("FizzBuzz")
    }
    else if (i % 7 == 0){
        console.log("Buzz")
    }
    else if(i % 3 == 0 ){
        console.log("Fizz")
    }
    else if(is.includes("3") && i % 3 !== 0 && i % 7 !==0 ){
        console.log("Almost Fizz")
    }
    else{
        console.log(String(i))
    }
}
}

console.log("Welcome to FizzBuzz!")
fizzBuzz(num)

