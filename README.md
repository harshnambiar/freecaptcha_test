# freecaptcha_test
This is a tutorial repository on how to use the freecaptcha package in your node project.  

# Steps  
1. npm install freecaptcha  
2. in your html file where you need the captcha, create a canvas element as shown in the index.html here.  
3. in your index.js file, call the freecaptcha code through the createCaptcha function as shown in our index.js here. It requires the HTMLCanvasElement obtained in Step 2 as its sole argument.  
4. fetch the return value of the captcha (since createCaptcha has return type string). Compare it with the user input to validate the user!  

Thanks for giving FreeCaptcha a chance!! 
