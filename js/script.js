const container = document.querySelector(".my-container");
const limit = 100;

for(let i=1; i<=limit; i++){
  
  // generazione del box
  const box = document.createElement('div');
  box.className = "box";
  box.innerHTML = i;
  container.append(box);

  // controlli di divisbilità
  if(!(i % 3)){
    box.classList.add("fizz");
    box.innerHTML = "fizz";
  }
  if(!(i % 5)){
    box.classList.add("buzz");
    box.innerHTML = "buzz";
  }
  if((!(i % 3)) && (!(i % 5))){
    box.classList.add("fizzbuzz");
    box.innerHTML = "fizzbuzz";
  }
}

