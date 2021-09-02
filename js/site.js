function getWordsEntered(){
   const originalWords = document.getElementById("wordsEnteredId").value;
   
   const reversed = reverseWords(originalWords);
   displayMoontalk(reversed);
}


function reverseWords(words){

   wordiness = words.length;

   reversed = [];

   for (let i = 0; i < wordiness; i++) {
      const element = words[wordiness - i -1];
      reversed.push(element);
   }

   return reversed;
}

// //UI function
function displayMoontalk(moontalking){

   const html = moontalking.join("");

   document.getElementById("results").innerHTML = html;
}



// function displayNumbers(numbers){

//    let templateRows = "";

//    for (let i = 0; i < numbers.length; i++) {
//       let n = numbers[i];
//       let className = "";

//       if (n % 2 == 0) {
//          className = "even";
//       }
//       else{
//          className = "odd";         
//       }

//       templateRows += `<tr><td class="${className}">${n}</td></tr>`;      
//    }

//    // Insert the final result into the DOM.
//    document.getElementById("results").innerHTML = templateRows;
// }