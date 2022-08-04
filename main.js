// console.log("Hello World");

// const belajarLogika = (a) => {
// 	return a + 10;
// }

// console.log(belajarLogika(5));

// const belajarLogika2 = (a) =>  {
// 	if (a === 10) {
// 	return "true";
// 	} else {
// 		return "false";
// 	}
// }

// console.log(belajarLogika2(10));

// const belajarLogika3 = (a) => {
// 	if (a >= 10) {
// 		return "True";
// 	} else {
// 		return "False";
// 	}
// }

// console.log(belajarLogika3(10));

// const belajarLogika4 = (a) => {
// 	if (a < 1) {
// 		return "less than 1";
// 	} else if (a < 2) {
// 		return "less than 2";
// 	} else if (a < 3) {
// 		return "less than 3";
// 	} else {
// 		return "nothing";
// 	}
// }

// console.log(belajarLogika4(2));

// const sepakBola = ["one-goal", "brace", "hattrick", "quatrik", "five goal", "amazing"];

// const funcSepakBola = (a) => {
// 	if (a == 1) {
// 		return sepakBola[0];
// 	} else if (a == 2) {
// 		return sepakBola[1];
// 	} else if (a == 3) {
// 		return sepakBola[2];
// 	} else if (a == 4) {
// 		return sepakBola[3];
// 	} else if (a == 5) {
// 		return sepakBola[4];
// 	} else if (a > 5) {
// 		return sepakBola[5];
// 	} else {
// 		return "nothing";
// 	}
// }

// console.log(funcSepakBola(0));

// function caseInSwitch(val) {
//   var answer = "";
//   switch(val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }

//   return answer;  
// }

// console.log(caseInSwitch(1));

const body = document.body;

const darkMode = () => {
	console.log("dark mode activated");
	body.classList.toggle("dark");
}