// importing the needed dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// importing packages for a maximum character length in the text prompt
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

// putting the prompts in array to make it more organised
const questions = [
  {
    type: "maxlength-input",
    maxLength: 3,
    message: "Please provide your brand abbreviation (3 characters)",
    name: "text",
  },
  {
    message:
      "Please provide your preferred text color via keyword or hexadecimal",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please pick one of the shapes below:",
    name: "shapes",
    choices: ["circle", "triangle", "square"],
  },
  {
    message:
      "Please provide your preferred shape color via keyword or hexadecimal",
    name: "shapeColor",
  },
];

// function will use the data from svgContent to create the logo file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error(error) : console.log("Generated logo.svg!");
  });
}

function init() {
  // the inquirer prompt method to show the prompts in the terminal
  inquirer.prompt(questions).then((response) => {
    let svgContent = "";

    if (response.shapes === "circle") {
      // fs.writeFile instead of writeFile, make each if statement into variable and call writeFile function
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />
    
      <text x="150" y="105" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${response.textColor}">${response.text}</text>
    
      </svg>
    `;
    }

    if (response.shapes === "square") {
      // fs.writeFile(
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="90" y="50" width="150" height="190" fill="${response.shapeColor}" />
    
      <text x="165" y="135" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${response.textColor}">${response.text}</text>
    
      </svg>
    `;
    }
    //   <rect x="100" y="100" width="150" height="150" fill="${response.shapeColor}" />
    // <text x="150" y="125" font-size="60" text-anchor="middle"

    if (response.shapes === "triangle") {
      // fs.writeFile( "logo.svg")
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="100,10 190,190 10,190" fill="${response.shapeColor}" /> 
      
      <text x="102" y="130" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="${response.textColor}">${response.text}</text>
    
      </svg>
    `;
    }
    // writing the path of the folder as well so they generate inside there and not in the main folder
    writeToFile("./dist/logo.svg", svgContent);
  });
}

init();

// inquirer
//   .prompt([
//     {
//       message: "Please provide your brand abbreviation (3 characters)",
//       name: "text",
//     },
//     {
//       message:
//         "Please provide your preferred text color via keyword or hexadecimal",
//       name: "textColor",
//     },
//     {
//       type: "list",
//       message: "Please pick one of the shapes below:",
//       name: "shapes",
//       choices: ["circle", "triangle", "square"],
//     },
//     {
//       message:
//         "Please provide your preferred shape color via keyword or hexadecimal",
//       name: "shapeColor",
//     },
//   ])
//   .then((response) => {
//     if (response.shapes === "circle") {
//       fs.writeFile(
//         "logo.svg",
//         `
//       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//       <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />

//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

//       </svg>
//     `,
//         (error) => {
//           error ? console.error(error) : console.log("Success!");
//         }
//       );
//     }
//     if (response.shapes === "square") {
//       fs.writeFile(
//         "logo.svg",
//         `
//       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//       <rect x="100" y="100" width="100" height="100" fill="${response.shapeColor}" />

//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

//       </svg>
//     `,
//         (error) => {
//           error
//             ? console.error(error)
//             : console.log("Successfully made a shape yippee!");
//         }
//       );
//     }
//     if (response.shapes === "triangle") {
//       fs.writeFile(
//         "logo.svg",
//         `
//       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//       <polygon points="100,10 190,190 10,190" fill="${response.shapeColor}" />

//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

//       </svg>
//     `,
//         (error) => {
//           error ? console.error(error) : console.log("Success!");
//         }
//       );
//     }
//   });

// CREATING PARENT CLASS SHAPES, AND THE SHAPE CLASSES WHICH INHERIT SHAPE CLASSES' PROPERTIES
// NEED TO CREATE SEPARATE FILE
// class Shapes {
//   constructor(text, textColor, shapeColor) {
//     this.textColor = textColor;
//     this.text = text;
//     this.shapeColor = shapeColor;
//   }
// }

// class Triangle extends Shapes {
//   constructor(text, textColor, shapeColor) {
//     super(text, textColor, shapeColor);
//   }
// }

// class Circle extends Shapes {
//   constructor(text, textColor, shapeColor) {
//     super(text, textColor, shapeColor);
//   }
// }

// Each shape class should be tested for a render() method
// that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
