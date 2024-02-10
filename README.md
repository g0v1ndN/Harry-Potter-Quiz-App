# harry-potter-trivia
<div align="left">
   <a href="https://opensource.org/osd">
      <img src="https://img.shields.io/badge/Open%20Source-%2328a745" alt="open-source"/>
   </a>
   <a href="https://opensource.org/license/mit/">
      <img src="https://img.shields.io/badge/License-MIT-green" alt="mit-license"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <img src="https://img.shields.io/badge/HTML-%23E44D26?logo=html5&logoColor=white" alt="HTML"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/CSS-%232965F1?logo=css3&logoColor=white" alt="CSS"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-grey?logo=javascript" alt="JS"/>
   </a>
</div>

## About:
This project is a web-based quiz application themed around the Harry Potter series. It utilizes JavaScript to create a dynamic and engaging user experience.

## Features:
1. The webpage has a main conaitner div with class "app" which wraps all the content of the webpage.
2. The webpage has a container with class "quiz" which contains the quiz question, answer options, and the next button.
3. The quiz questions and possible answers are stored in an array of objects called questions in the JavaScript code.
4. Each object in the questions array has a question property and an answers property. The answers property is an array of objects that contain text and correct properties. The text property is a string that represents a possible answer to the question, while the correct property is a boolean that indicates whether that answer is correct or not.
5. The current question and answer choices are displayed on the website using JavaScript. The question and answer-buttons elements are selected using the document.getElementById() method, and the text content of these elements is set to the current question and answer choices using the textContent property.
6. When the user clicks on an answer choice, the checkAnswer() function is called. This function takes in the selectedAnswer parameter, which represents the button that was clicked. The function checks whether the selected answer is correct or not by comparing the correct property of the answer object with the true boolean value.
7. If the selected answer is correct, the button is given the correct class, and if it is incorrect, the button is given the incorrect class.

## Usage Instructions:

### Prerequisites:
- Basic HTML, CSS, and JavaScript Knowledge: Familiarity with HTML, CSS, and JavaScript concepts is essential for understanding the structure, styling, and interactivity of the project.
- Text Editor or Integrated Development Environment (IDE): You'll need a code editor to make changes to the project files. Popular choices include Visual Studio Code, Sublime Text, or Atom.
- Web Browser: You'll need a modern web browser (such as Google Chrome, Mozilla Firefox, or Microsoft Edge) to view and test your changes.

### Downloading or Cloning the Repository:
1. Click on the "Code" button on the top right corner of this repository page.
2. Click on "Download ZIP" to download a compressed zip file of the repository.
3. Extract the contents of the zip file to a folder on your computer.

<p align="center"><b> OR </b></p>

1. Open your terminal or command prompt and navigate to the directory where you want to clone the repository.
2. Run the command `git clone https://github.com/g0v1ndN/harry-potter-trivia` to clone the repository to your local machine.
> [!NOTE]
> You need to have Git installed on your computer. If you don't have it installed, please download and install Git from the [official website](https://git-scm.com).

### Opening the HTML File in a Web Browser:
1. Open the folder where you downloaded or cloned the repository.
2. Find the HTML file named _'index.html'_ within the folder.
3. Double-click on the HTML file to open it in your default web browser. Alternatively, you can right-click on the file and select "Open With" to choose a specific web browser to open the file.

## Screenshots:

<p align="center"><b>Question Bank</b></p>
<img src="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/images/Quiz%20App%20-%20Questions.png" alt="Screenshot"/>
<br>
<p align="center"><b>Quiz Results</b></p>
<img src="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/images/Quiz%20App%20-%20Final%20Score.png" alt="Screenshot"/>

## License: 
This project is licensed under the terms & conditions (T&Cs) of the MIT license. If you're interested in reading more about it, please take a look at the <a href="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/LICENSE">LICENSE</a> document.
