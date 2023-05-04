const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// function startTyping() {
//   let sentenceIndex = Math.floor(Math.random() * sentences.length);
//   let sentence = sentences[sentenceIndex];
//   let index = 0;
//   intervalId = setInterval(() => {
//     typing.innerHTML += sentence[index];
//     index++;
//     if (index === sentence.length) {
//       clearInterval(intervalId);
//       setTimeout(() => {
//         intervalId = setInterval(() => {
//           typing.innerText = typing.innerText.slice(0, -1);
//           if (typing.innerText === "") {
//             clearInterval(intervalId);
//             startTyping();
//           }
//         }, 20);
//       }, 2500);
//     }
//   },20);
// }