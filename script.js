// Konekta sa display gamit ang getElementById

const display = document.getElementById('display-text');

let input = '';





function addChar(char) {

  

  if (display.textContent === '0' && char !== '.' && char !== '(' && char !== ')' && char !== '%') {

    input = char;

    display.textContent = input;

  } 

  else if (display.textContent === 'Error') {

    input = char;

    display.textContent = input;

  } 

 

  else {

    input += char;

   
    let showInput = input.replace('/', '÷').replace('*', '×');

    display.textContent = showInput;

  }

}





function clearAll() {

  input = '';

  display.textContent = '0';

}




function computeResult() {

  try {

   

      .replace('×', '*') // Palitan ang × ng *

      .replace('÷', '/') // Palitan ang ÷ ng /

      .replace(/(\d+(\.\d+)?)\%/g, (_, num) => num / 100); // Gawing decimal ang percentage



   
    const result = Function('"use strict";return (' + expr + ')')();

     

   

    let finalResult = typeof result === 'number' ? 

      (result % 1 === 0 ? result : result.toFixed(4).replace(/\.?0*$/, '')) : 

      result;



    display.textContent = finalResult;

    input = finalResult.toString();

  } catch (err) {

    display.textContent = 'Error';

    input = '';

  }

}

