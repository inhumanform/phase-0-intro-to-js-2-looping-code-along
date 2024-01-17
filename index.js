const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const my_names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, holiday = "birthday"){
    return names.map(name => `Thank you, ${name}, for the wonderful ${holiday} gift!`);
}

writeCards(my_names, "surprise");



function countDown(number) {
    
    if (number < 0) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
 
  countDown(10);