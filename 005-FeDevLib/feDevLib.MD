# jquery

```
$(document).ready(function(){
// jQuery methods go here..
});
or
$(function(){
  // juery methods go here...
});
```

This is to prevent any jQuery code from running before the document is finished loading (is ready).

## Selectors

ex

> $("p") - 
html element
> $("#test") -
> id
> $(".test") - class selector

If your website contains a lot of pages, and you want your jQuery functions to be easy to maintain, you can put your jQuery functions in a separate .js file.

When we demonstrate jQuery in this tutorial, the functions are added directly into the <head> section. However, sometimes it is preferable to place them in a separate file, like this (use the src attribute to refer to the .js file):

## jQuery Event Methods

$(document).ready()
click()
dblclick()
mouseenter() when the mouse pointer enters the HTML element:
mouseleave() when the mouse pointer leaves the HTML element:Jurassic World Rebirth | Official Trailer

mousedown() when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element:
mouseup() when the left, middle or right mouse button is released, while the mouse is over the HTML element:
hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
focus() xecuted when the form field gets focus:
blur() executed when the form field loses focus:
on() method attaches one or more event handlers for the selected elements.

# sass

## /_ Define standard variables and values for website _/

$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

## /_ Use the variables _/

background-color: $bgcolor;
color: $textcolor;
font-size: $fontsize;
