const inquirer = require("inquirer");
const fs = require("fs");
const {
  Triangle: Triangle,
  Square: Square,
  Circle: Circle,
} = require("./lib/shape");

//inquirer prompts
//3 letters max
//letter color
//shape (circle, triangle, square)
//shape color
//generates appropriate svg file

inquirer
  .prompt([
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
        "What color would you like the letters to be? (must be either a keyword color or hexadecimal number)",
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    if (answers.text.length > 3) {
      console.log("must be 3 letters or less");
    } else {
      switch (answers.shape) {
        case "circle":
          const circle = new Circle(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          //   console.log(circle);
          return circle;
        case "triangle":
          const triangle = new Triangle(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          //   console.log(triangle);
          return triangle;
        case "square":
          const square = new Square(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor
          );
          //   console.log(square);
          return square;
      }
    }
  })
  .then((logo) => {
    const SVG = logo.generateLogo();
    fs.writeFile("logo.svg", SVG, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
