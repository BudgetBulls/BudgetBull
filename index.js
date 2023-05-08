/*


  example:
  const pair = findPairForSum([3, 34, 4, 7, 5], 9)
  console.log(pair) > [4,5]
*/

// function solution(songs, animations) {
//   songs = songs.map(song => {
//     const result = [];
//     for (let i = 0; i < songs.length; i++) {
//       let currentSong = songs[i];
//       let chosenAnimation;
//       let timesPlayed;
//       for (let j = 0; j < animations.length; j++) {
//         let animation = animations[j];
//         if (currentSong.length % animation.length === 0) {
//           chosenAnimation = animation.name;
//           timesPlayed = currentSong.length / animation.length;
//           break;
//         }
//       }
//       result.push(`${chosenAnimation}:${timesPlayed}`);
//     }
//     return result;
//   });
//   return songs;
// }

// const songs = ['notion:180', 'voyage:185', 'sample:180'];
// const animations = ['circles:360', 'squares:180', 'lines:37'];

// console.log(solution(songs, animations));


// function findPair(arr, target) {
//     let sorted = arr.sort((a,b) => a-b)
//     let left = 0
//     let right = sorted.length-1
//     while (right > left) {
//         sum = sorted[left] + sorted[right]
//         if (sum === target){
//             let first = sorted[left];
//             let second = sorted[right];
//             return [first, second]
//         } else if (sum < target) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return []
// }
// // console.log(findPair([3, 87, 73, 4, 98, 24, 28], 28))
// console.log(findPair([3, 34, 4, 7, 5], 9))
// console.log(findPair([3, 4, 5, 7, 34],9))
// console.log(findPair([3, 3, 3, 3, 3, 10], 6))
// console.log(findPair([3, 10, 10, 10, 10], 6))
// relational databases (SQL and NoSQL(maybe))
//skip Binary
//general software engineering panel questions
//depending on what u do u may get a question related to that (front-end, back-end, mobile)


// function findPairWithMap(arr, target) {
//   let obj = {}
//   for (let num of arr){
//       if (obj[target-num]) return [target-num, num]
//       obj[num] = (obj[num] || 0) + 1
//   }
//   return []
// }
// //precomputation (iterating through a list and building an object)
  
//   console.log(findPairWithMap([3, 87, 73, 4, 98, 24, 28], 28)); // [4, 24]
//   console.log(findPairWithMap([3, 34, 4, 7, 5], 9)); // [4, 5]
//   console.log(findPairWithMap([3, 4, 5, 7, 34], 7)); // [3, 4]
//   console.log(findPairWithMap([3, 3, 3, 3, 3, 10], 6)); // [3, 3]
//  console.log(findPairWithMap([3, 10, 10, 10, 10], 6)); // []


  
// function findPairWithMap(arr, target) {
//     const seen = new Set();
//     for (let num of arr) {
//       const complement = target - num;
//       if (seen.has(complement)) {
//         return [complement, num];
//       }
//       seen.add(num);
//     }
//     return [];
//   }
  
  
  
//   console.log(findPairWithMap([3, 87, 73, 4, 98, 24, 28], 28)); // [4, 24]
//   console.log(findPairWithMap([3, 34, 4, 7, 5], 9)); // [4, 5]
//   console.log(findPairWithMap([3, 4, 5, 7, 34], 9)); // [4, 5]
//   console.log(findPairWithMap([3, 3, 3, 3, 3, 10], 6)); // [3, 3]
//   console.log(findPairWithMap([3, 10, 10, 10, 10], 6)); // []




// const doc = document;
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

// menuOpen.addEventListener("click", () => {
//   overlay.classList.add("overlay--active");
// });

// menuClose.addEventListener("click", () => {
//   overlay.classList.remove("overlay--active");
// });


// const doc = document;
// const menuOpen = doc.querySelector(".menu-items");
// const overlay = doc.querySelector(".overlay");

// menuOpen.addEventListener("click", () => {
//   overlay.classList.add("overlay--active");
// });

// doc.addEventListener("click", (event) => {
//   if (event.target === overlay) {
//     overlay.classList.remove("overlay--active");
//   }
// });

// // scroll top btn
// let scrollTop = document.querySelector('.scroll-top-btn');

// window.addEventListener('scroll', function () {
// 	if (window.pageYOffset > 70) {
// 		scrollTop.classList.add('active');
// 	} else {
// 		scrollTop.classList.remove('active');
// 	}
// });

// // menu toggle bar
// let navToggler = document.querySelector('.nav-toggler');
// let menuItems = document.querySelector('.menu-items');

// let navList = document.querySelectorAll('.menu-items > li > a');

// navToggler.addEventListener('click', function () {
// 	navToggler.classList.toggle('active');
// 	menuItems.classList.toggle('show');

// 	for (let i = 0; i < navList.length; i++) {
// 		navList[i].addEventListener('click', function () {
// 			navToggler.classList.remove('active');
// 			menuItems.classList.remove('show');
// 		});
// 	}
// });

// // aos animation
// AOS.init({
// 	duration: 1000
// });

    