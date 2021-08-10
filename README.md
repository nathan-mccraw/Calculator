# Calculator
Fully functioning and interactive standard calculator app using vanilla JS, HTML, and CSS.

Use the calculator application [here](https://nathan-mccraw.github.io/Calculator/)

![Calculator Preview Image](https://user-images.githubusercontent.com/84479635/122505391-43a28580-cfca-11eb-8a0d-e67f4e94af70.JPG)


## Installation

To use the Calculator application:

1.  Follow this [link](https://nathan-mccraw.github.io/Calculator/) to play the game on your browser.

2.  To use the application locally and to obtain the code base for the application, you can either download a zip file of the code and application or you can fork this repository to make changes and maintain version control.  You can download the code in a zip file by clicking "code" -> download zip from this repository dashboard (see picture below), extrtact the files from the zip file and skip to step 6.  If you wish to fork this repository then go to step 3.

![download](https://user-images.githubusercontent.com/84479635/128910426-1cc2005e-5458-42f7-8d8d-9821c1114e80.JPG)

3. If you wish, you can fork this repository, which makes a copy of this repository and stores it to your repository (Github account required).

4.  Clone your repository to your local machine using the command line: [Git Clone](https://git-scm.com/docs/git-clone). This allows you to make changes to the calculator app,       maintain version control, and save those changes to your repository.  Cloning the app directly from this repository will not let you freely push changes to the app.

5.  Navigate to the root directory of the app.  i.e. If you navigated to C:\Users\{YOUR ACCOUNT NAME}\Documents when you ran 'git clone', then there will now be a directory at       C:\Users\{YOUR ACCOUNT NAME}\Documents\Calculator.  All application files will now be in this folder.

6.  If you only wish to run the application, navigate to C:\Users\{YOUR ACCOUNT NAME}\Calculator to find index.html. Open this html file with google Chrome to view the               application without viewing the code.

### Summary
This project is a simple static file application but took a strong understanding of event listeners, the DOM, and the logic of a calculator app is easily underestimated.  In the nature of trying new things, I implemented a single event listener on the div containing the calculator buttons and used the event.target to determine the user inputs when a click event is performed on that DIV.  I believe this made the project a little more denser than it should have been, but it was a fun challenge to undertake.  I also took the opportunity to build an object containing the user inputs, destructure it in a function argument, and use key-value pairs to update the inputs/outputs.  If I was to do this project again, which I am sure to, I would try to simplify the overall structure to not include the above mentioned implementations.  


#### Author
Nathan McCraw -- Software Developer [LinkedIn](https://www.linkedin.com/in/nathan-mccraw-5291535b/) [Personal Website - In Production]
