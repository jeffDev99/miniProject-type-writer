let $ = document;
let text = "this is";
// let textArr = ["this is my text 1","this is my text 2","this is my text 3","this is my text 4"];
let textEl = $.querySelector("#text");
let typeWriterCounter = 0;
let typeWriterBackSpaceCounter = 0
// set interval way
let typeWriterInterval = setInterval(typeWriter, 100);
let typeWriterBackSpaceInterval 

function typeWriter() {
  if (typeWriterCounter <= text.length - 1) {
    textEl.innerHTML += text[typeWriterCounter];
    typeWriterCounter++;
  } else {
    clearInterval(typeWriterInterval);
    typeWriterBackSpaceInterval = setInterval(typeWriterBackSpace, 100)
  }
}
function typeWriterBackSpace() {
  if (typeWriterBackSpaceCounter >= -(text.length)) {
    textEl.innerHTML =text.slice(0,typeWriterBackSpaceCounter)
    typeWriterBackSpaceCounter--;
  } else {
    clearInterval(typeWriterBackSpaceInterval);
  }
}

// set time out way
// const typeWriter = () => {
//     if (typeWriterCounter < text.length) {
//         textEl.innerHTML += text[typeWriterCounter]
//         typeWriterCounter++
//     }

//     setTimeout(() => {
//         typeWriter()
//     }, 100);
// }

// typeWriter()
