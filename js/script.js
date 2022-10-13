const container = document.querySelector(".my-container");
const limit = 100;

for(let i=1; i<=limit; i++){
  
  const box = document.createElement('div');
  box.className = "box";
  box.innerHTML = i;
  container.append(box);

  if(DivisibleBy(i, 3)){
    box.classList.add("fizz");
    box.innerHTML = "fizz";
  }
  if(DivisibleBy(i, 5)){
    box.classList.add("buzz");
    box.innerHTML = "buzz";
  }
  if(DivisibleBy(i, 3) && (DivisibleBy(i, 5))){
    box.classList.add("fizzbuzz");
    box.innerHTML = "fizzbuzz";
  }
}

function DivisibleBy(num, div){
  if(!(num % div))
    return true;
  else
    return false;
}