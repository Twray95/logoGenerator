const inquirer = require("inquirer");
const fs = require("fs");
const {
  Triangle: Triangle,
  Square: Square,
  Circle: Circle,
} = require("./lib/shape");
//These require functions are bringing in the necessary functions for this project, inquirer, fs, and the classes from shape.js

inquirer
  .prompt([
    //These prompts are used to gather the data needed to generate the svg, text, text color, shape, and shape color.
    {
      type: "input",
      message: "Input up to 3 letters for your logo",
      name: "text",
    },
    {
      type: "input",
      message:
        "What color would you like the letters to be? (must be either a keyword color or hexadecimal number)",
      name: "textColor",
    },
    {
      type: "list",
      message: "What background shape would you like to have?",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "input",
      message:
        "What color would you like the shape to be? (must be either a keyword color or hexadecimal number)",
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    //These first three if statements are making sure the user didn't input more that 3 letters and added a color to both the letters and shape.
    if (answers.text.length > 3) {
      console.log("must be 3 letters or less");
    } else if (answers.textColor === "") {
      console.log("Please select a text color");
    } else if (answers.shapeColor === "") {
      console.log("Please enter a shape color");
    } else {
      switch (answers.shape) {
        //This switch statement checks the user response for shape and then adds the user input to the parameters of whatever shape was chosen using the constructor functions from the shape.js.  It then returns the new shape to the .then function.
        case "circle":
          const circle = new Circle(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          return circle;
        case "triangle":
          const triangle = new Triangle(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          return triangle;
        case "square":
          const square = new Square(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          return square;
        default:
          return;
      }
    }
  })
  .then((logo) => {
    //This takes the return of the switch statement and runs the generateLogo method that each shape has on it.  Then it adds the text from the generateLogo method to a file called 'logo.svg' and logs out 'Generated logo.svg' if it was successful.
    const SVG = logo.generateLogo();
    fs.writeFile("logo.svg", SVG, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
