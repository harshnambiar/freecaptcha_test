# freecaptcha_test
This is a tutorial repository on how to use the freecaptcha package in your node project.  

# Steps  
1. npm install freecaptcha  
2. in your html file where you need the captcha, create a canvas element as shown in the index.html here.  
3. in your index.js file, call the freecaptcha code through the createCaptcha function as shown in our index.js here. It requires the HTMLCanvasElement obtained in Step 2 as its sole argument.  
4. fetch the return value of the captcha (since createCaptcha has return type string). Compare it with the user input to validate the user!  

Thanks for giving FreeCaptcha a chance!!  

# What is the Correct Captcha?
The Captcha is always a 9 letter code formed by entering the White, Navy Blue and Red Text (in order). Ignore the text of every other color.  
![freecaptcha_text](https://i.postimg.cc/3RXMTg2Q/image.png)  
For example, in this case, the correct value of the Captcha is joKYnpAbw


# What's New in This Update?  
Added font randomization to make automated clearance harder. 
