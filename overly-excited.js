// function addExcitement () {
//     console.log("Hello, world!");
// }

// addExcitement();


// Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


    // Each time the for loop executes, you're going to add one more word to this string

    
// CORRECT ANSWER

    // function addExcitement(theWordArray) {
    //     let buildMeUp = "";
    
    //     for (let i = 0; i < theWordArray.length; i++) {
    //           buildMeUp += theWordArray[i] + " ";
    //           console.log(buildMeUp);
    
    //     }
    
    // }
    
    //     addExcitement(sentence)


                // CORRECT ANSWER

        // let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
        
        // function addExcitement(theWordArray) {
           
        //     let buildMeUp = "";
           
        //     for (let i = 0; i < theWordArray.length; i++) {
                 
        //         if ((i + 1) % 3 === 0) {
        //             buildMeUp += theWordArray[i] + "! "
        //           }
        //         else {
        //             buildMeUp += theWordArray[i] + " ";
                    
        //         }
        //         console.log(buildMeUp);
        //     }
        
        // }
        
        //     addExcitement(sentence);
         

                // CORRECT ANSWER

            // let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
            // let symbol = "? ";
    
            // function addExcitement(theWordArray, symbol,) {
            //     let buildMeUp = "";
               
            //     for (let i = 0; i < theWordArray.length; i++) {
            //         //   buildMeUp += theWordArray[i] + " ";
            //         //   console.log(buildMeUp);
            //           if ((i + 1) % 3 === 0) {
            //             buildMeUp += theWordArray[i] + symbol;
            //             // console.log(buildMeUp);
            //           }
            //         else {
            //             buildMeUp += theWordArray[i] + " ";
                        
            //         }
            //         console.log(buildMeUp);
            //     }
            
            // }
            
            //     addExcitement(sentence, symbol);


            // CHALLENGE; MULTIPLE PUNCTUATION 

                    // CORRECT ANSWER !!!!!!

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
            let symbol = "? ";
    
            function addExcitement(theWordArray, symbol, howmuchpunctuation) {
                let buildMeUp = "";
               

                for (let i = 0; i < theWordArray.length; i++) {
                 
                      if ((i + 1) % 3 === 0) {
                        buildMeUp += theWordArray[i] + symbol + symbol.repeat(howmuchpunctuation);
                        }
                    else {
                        buildMeUp += theWordArray[i] + " ";    
                    }
                    console.log(buildMeUp);
                }
            
            }
            
                addExcitement(sentence, symbol, 3);





            