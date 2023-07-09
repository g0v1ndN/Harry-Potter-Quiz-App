# harry-potter-trivia
<div align="left">
   <a href="https://github.com/g0v1ndN">
      <img src="https://img.shields.io/badge/Code_Dealer-g0v1ndN-yellowgreen"/>
   </a>
   <a href="https://opensource.org/osd">
      <img src="https://github.com/g0v1ndN/AssetVault/blob/main/Badges/open-source.svg" alt="open-source"/>
   </a>
   <a href="https://opensource.org/license/mit/">
      <img src="https://github.com/g0v1ndN/AssetVault/blob/main/Badges/License-MIT-green.svg" alt="mit-license"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <img src="https://img.shields.io/badge/HTML-%23E44D26" alt="HTML"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/CSS-%232965F1" alt="CSS"/>
   </a>
   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-%23F0DB4F" alt="JS"/>
   </a>
</div>

## About:
Welcome to my Harry Potter themed quiz application, which I created to expand my knowledge of web development by exploring JavaScript. After gaining a better understanding of HTML and CSS, I wanted to challenge myself with a more dynamic and interactive project. This quiz application allowed me to delve into the world of JavaScript and learn how to create an engaging and user-friendly web application. As a fan of the Harry Potter books, I chose to make the quiz application themed around the series to add a fun and exciting element to the project.

## Features:
Here are a few features of this webpage.
1. The webpage has a main container div with class "app" which wraps all the content of the webpage.
2. The webpage has a container with class "quiz" which contains the quiz question, answer options, and the next button.
3. The quiz questions and possible answers are stored in an array of objects called questions in the JavaScript code.
4. Each object in the questions array has a question property and an answers property. The answers property is an array of objects that contain text and correct properties. The text property is a string that represents a possible answer to the question, while the correct property is a boolean that indicates whether that answer is correct or not.
5. The current question and answer choices are displayed on the website using JavaScript. The question and answer-buttons elements are selected using the document.getElementById() method, and the text content of these elements is set to the current question and answer choices using the textContent property.
6. When the user clicks on an answer choice, the checkAnswer() function is called. This function takes in the selectedAnswer parameter, which represents the button that was clicked. The function checks whether the selected answer is correct or not by comparing the correct property of the answer object with the true boolean value.
7. If the selected answer is correct, the button is given the correct class, and if it is incorrect, the button is given the incorrect class.

## Usage Instructions:

### Downloading or Cloning the Repository:
1. Click on the "Code" button on the top right corner of this repository page.
2. Click on "Download ZIP" to download a compressed zip file of the repository.
3. Extract the contents of the zip file to a folder on your computer.

<p align="center"><b> OR </b></p>

1. Open your terminal or command prompt and navigate to the directory where you want to clone the repository.
2. Run the command `git clone https://github.com/g0v1ndN/harry-potter-trivia` to clone the repository to your local machine.
<p><b>Note:</b> You need to have Git installed on your computer. If you don't have it installed, please download and install Git from the official website (https://git-scm.com).</p>

### Opening the HTML File in a Web Browser:
1. Open the folder where you downloaded or cloned the repository.
2. Find the HTML file named 'index.html' within the folder.
3. Double-click on the HTML file to open it in your default web browser. Alternatively, you can right-click on the file and select "Open With" to choose a specific web browser to open the file.

## Screenshots:

<p align="center"><b>Question Bank</b></p>
<img src="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/images/Quiz%20App%20-%20Questions.png" alt="Screenshot"/>
<br>
<p align="center"><b>Quiz Results</b></p>
<img src="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/images/Quiz%20App%20-%20Final%20Score.png" alt="Screenshot"/>

## MIT License: 
Hello! If you're interested in using my code, I'm happy to share it with you under the <a href="https://github.com/g0v1ndN/harry-potter-trivia/blob/main/LICENSE">MIT License</a>. This license is fairly permissive, which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of my code without restriction, as long as you include the original copyright notice and disclaimer in your own code. Additionally, I provide no warranties or guarantees for my code, so you use it at your own risk. I hope this helps, and happy coding!
