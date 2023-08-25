
window.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.querySelector('.js-output');
    
    // String methods
    const exampleString = 'Hello, World!';
    const stringOutput = `
      String methods:
      Length: ${exampleString.length}
      Uppercase: ${exampleString.toUpperCase()}
      Lowercase: ${exampleString.toLowerCase()}
      Index of 'World': ${exampleString.indexOf('World')}
      Split: ${exampleString.split(',').join(' - ')}
    `;
  
    // Number methods
    const exampleNumber = 42.75;
    const numberOutput = `
      Number methods:
      To Fixed (2 decimal places): ${exampleNumber.toFixed(2)}
      To String: ${exampleNumber.toString()}
      Is Integer: ${Number.isInteger(exampleNumber)}
      Rounded: ${Math.round(exampleNumber)}
      Maximum: ${Math.max(10, 20, 5, 30)}
    `;
  
    // Array methods
    const exampleArray = [1, 2, 3, 4, 5];
    const arrayOutput = `
      Array methods:
      Length: ${exampleArray.length}
      Joined: ${exampleArray.join(' - ')}
      Pushed (with 6): ${exampleArray.concat(6).join(', ')}
      Popped: ${exampleArray.slice(0, -1).join(', ')}
      Includes 3: ${exampleArray.includes(3)}
    `;
  
    // Date methods
    const currentDate = new Date();
    const dateOutput = `
      Date methods:
      Full Date: ${currentDate}
      Year: ${currentDate.getFullYear()}
      Month: ${currentDate.getMonth() + 1}
      Day: ${currentDate.getDate()}
      Hours: ${currentDate.getHours()}
      Minutes: ${currentDate.getMinutes()}
    `;
  
    // Function methods
    function greet(name) {
      return `Hello, ${name}!`;
    }
  
    function calculateSum(a, b) {
      return a + b;
    }
  
    const functionOutput = `
      Function methods:
      Output: ${greet('The Marker')}
      Sum: ${calculateSum(6, 8)}
    `;
  
    outputElement.textContent = stringOutput + '\n\n' + numberOutput + '\n\n' + arrayOutput + '\n\n' + dateOutput + '\n\n' + functionOutput;
  });

  
  