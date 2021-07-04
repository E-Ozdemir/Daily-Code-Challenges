//----JS Daily  Challenge---- 4 Jully 2021
var str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

function findAll(str, word) {
  if (str.includes(word)) {
    for (let i = 0; i <= str.length; i++) {
      if (word === str.substr(i, word.length)) {
        console.log(`"${word}"   ${i}'th index`);
      }
    }
  } else {
    console.log("no match");
  }
}
findAll(str, "in");