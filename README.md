# Raspberry pi Graphic User interface
This application is built using Html, Css, Javascript, PHP and Python 

Projector.html serves as the graphic user interface, displaying buttons and sliders all styled with theme.css and bootstrap (css library)

Switcher.js is the "middleman". When a button is clicked javascript calls the PHP script for the corresponding input.  

PHP handles the back end sending a terminal command to run a python script thaat ultimately sends the serial command to the switcher or display.  
----------------------------------------------------------------------------------

To change commands for a button 
1. Open Switcher.js 
2. Identify the button you want to change by it's id tag (i.e.'button:button[id^="Laptop"]' for laptop button)
3. Note down the input script path in the buttons "get" function (i.e. $.get("scripts/Inputs/input_1.php");)
4. Open the corresponding python script (i.e. for input_1.php it would be input_1.py)
5. Change out the code between the quotations in the "port.write" line 
6. Save and Exit 
----------------------------------------------------------------------------------
Adding/removing buttons 
You can remove/add buttons using the projector.html page, you can comment out the <div> for the button you want to remove or copy and paste the div to make a new button. 

The class and id correspond to what Switcher.js tells it to do, so if you change or add a button you'll have to modify the click funtion in switcher.js and add the new button's id to the remove class function so that it doesn't stay highlighted when another is clicked 
