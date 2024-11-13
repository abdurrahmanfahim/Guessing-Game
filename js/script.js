const syndicate = document.querySelector(".p1");
const sInput = document.querySelector("#s-input");
const put = document.querySelector("#s-button");
const warning = document.querySelector(".warning");
// 
const yousuf = document.querySelector(".p2");
const chances = document.querySelector(".chances");
const yInput = document.querySelector("#y-input");
const guess = document.querySelector("#y-button");
const countSpan = document.querySelector("#count");
const marning = document.querySelector(".marning");
const result = document.querySelector(".result");
const congrate = document.querySelector(".congrate-box");
const chrom = document.querySelector(".marquee");
// 
let sInputVal;
let yInputVal;
let count = 5;


put.addEventListener("click", () => {
  
  sInputVal =  sInput.value;
  inputCheckS();

})


guess.addEventListener("click", () => {

  result.innerHTML = "";
  marning.innerHTML = "";
  inputCheckY();
  marning.style.color = "brown";
  
})


function inputCheckS () {

  if (isNaN(sInputVal)) {

    errorShowingS("txt");

  }
  else {
    
    if (sInputVal == "") {

      errorShowingS("empty")
      
    }
    else if (sInputVal > 9) {
      
      errorShowingS(">9")

    }
    else {
      
      displayControll("ybsn");
      marning.style.color = "green";
      chances.style.display = "block";
      countSpan.innerHTML = count;

    }
    
  }

}


function inputCheckY () {

  yInputVal = yInput.value;

  if (isNaN(yInputVal)) {

    errorShowingY("txt");

  }
  else {
    
    if (yInputVal == "") {

      errorShowingY("empty")
      
    }
    else if (yInputVal > 9) {
      
      errorShowingY(">9")

    }
    else {
      
      if (yInputVal != sInputVal) {
    
        if (count > 1) {  
          
          chances.style.display = "block";
          count--;
          countSpan.innerHTML = count;
          
        }
        else if (count == 1 && yInputVal != sInputVal) {
          
          winning("S");
          marning.style.display = "none";
          result.style.color = "brown";
          
        }
        
      } 
      else {
    
      winning("Y");
      marning.style.display = "none";
      result.style.color = "green";
      chrom.innerHTML = `<marquee class="marquee" behavior="" direction=""  scrollamount="10">ইউসুফ সরকারকে চরম মূল্য দিতে হবে।👨🏼‍🦯🧹🧙🏼‍♀️😡</marquee>`;
          
      }
      
    }
    
  }

}


function errorShowingS (err) {

  if (err == "txt") {

    warning.innerHTML = "you must enter a number here";
    warning.style.display = "block";

  }
  else if (err == "empty") {

    warning.innerHTML = "you can not leave this blank!";
    warning.style.display = "block";
    
  }
  else if (err == ">9") {

    warning.innerHTML = "you must enter a number here between 0-9";
    warning.style.display = "block";

  }

} 


function errorShowingY (err) {

  if (err == "txt") {

    marning.innerHTML = "you must enter a number here";

  }
  else if (err == "empty") {

    marning.innerHTML = "you can not leave this blank!";
    
  }
  else if (err == ">9") {

    marning.innerHTML = "you must enter a number here between 0-9";

  }

}


function displayControll (type) {

  if (type == "sbyn") {
    syndicate.style.display = "block";
    yousuf.style.display = "none";
  }
  else if (type == "ybsn") {
    yousuf.style.display = "block";
    syndicate.style.display = "none";
  }

}


function winning (won) {
  
  if (won == "S") {

    chances.innerHTML = "GAME OVER!";
    result.innerHTML = "SYNDICATE WON!!";
    congrate.innerHTML = "Try Again";

  }
  else if (won == "Y") {

    chances.innerHTML = "YOU WON THE GAME!!";
    result.innerHTML = "YOUSUF GOVERNMENT WON!!";
    congrate.innerHTML = "Congratulation";

  }

}




















