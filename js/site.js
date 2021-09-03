//Controller Function
function getWordsEntered(){
   const originalWords = document.getElementById("wordsEnteredId").value;   
   const reversed = reverseWords(originalWords);
   displayMoontalk(reversed);
}

//Logic Function
function reverseWords(words){

   wordiness = words.length;
   reversed = [];

   for (let i = 0; i < wordiness; i++) {
      const element = words[wordiness - i -1];
      reversed.push(element);
   }

   return reversed;
}

//UI function
function displayMoontalk(moontalking){

   const html = moontalking.join("");
   document.getElementById("okNowSayThis").innerHTML = "Ok...now say this out loud and you will be Moontalking!";
   document.getElementById("results").innerHTML = html;
}