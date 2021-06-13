# etchASketch
Repository for The Odin Project - Etch a Sketch challenge


MOTIVATION: This project was built as a challenge from The Odin Project's foundation course. The goal was to create a grid of cells with javascript, and then change the color of each cell when a mouse hovers over it. I also added functions to clear the grid, make a new grid with different sizes, and change the color for each hover event as per TOP's suggestions. I also included a function for turning borders on and off. 

DESIGN ISSUES: It took me awhile to figure out how to get the grid size to change and to get the grid size to stay in the same area. 

- To fix the changeGrid function, I needed to first remove all of the added cells. I could then add the makeGrid function. This created another issue with the hover functionality no longer working. I discovered that the cells-array-like object that I created to turn on the hover effect was only created when I loaded the script. So, when I removed all of the cells, the cells-array-like object no longer existed. I put the code for the hover effect into its own function, then added the function both into the main body of the script and into the changeGrid function. This worked well. 

- Getting the grid to stay in the same size was an issue with my styling, which I still struggle with. I created the grid by first making rows and appending them to a pre-sized 500px gameBoard. Then, I created cells and appended them to each row. The height of the rows was determined by flooring the result dividing the gameBoard height (500) by the amount of rows (entered by user or default 16). I floored it because you can't use decimals with pixels. However, flooring it caused the height to be slightly less than 500. I fixed it by adding flex-grow: 1 to the gameBoard's css style. It works, but I'm still not entirely sure of why.

 - After fixing the above issues, adding functionality for changing colors or adding borders was pretty easy. I do still need to work on understanding script flow, because I know that the placement of when things are called makes a difference, but am still struggling to visualize it. I also need to continue working on styling,  because the project isn't pretty. 
 
