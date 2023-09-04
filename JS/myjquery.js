

$(document).ready(function () {
    console.log('I am in a new file now');

    //Your jquery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()

    //clicks on all the p elements.
    // $('p').click(); //click on p
    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //      $('#id').hide();
    //       $('.class').hide(); 
    // }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });

    // $('p').mouseenter(function () {
    //     console.log('you entered on:', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });
    // $('p').hover(function () {
    //     console.log('you hoverd on: ', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // },
    // function (){

    //     console.log('Thanks for coming')
    // });


    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector
    // $('#second').click();

    // 3. Class selector - this is an example of id selector
    // $('.odd').click();

    // other selectors
    // $('*').click() // clicks on all the elements
    // $('p.odd').click() // clicks on all the elements
    // $('p:first').click() // clicks on all the elements

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    //multiple events handled
    //demoing the on method
    //     $('p').on(
    // {
    //     click:function()
    //     {
    //         console.log("Thanks for Coming");
    //     },
    //     mouseleave:function()
    //     {
    //         console.log("mouseleave");
    //     }
    // })
    // $('#wiki').hide(2000, function()
    // {
    //     console.log("hidden");
    // });
    // $('#wiki').show(1000, function()
    // {
    //     console.log("show");
    // });
   

    // $('#but').click(function () {

    //          $('#wiki').toggle(1000);

    //     })
   

    //fadein,fadeout,fadetoggle,fadeTo

    //slide function

     //$('#wiki').slideUp(1000);
    // $('#wiki').slideDown(1000);
   //  $('#wiki').slideToggle(1000);

    //Animate Function in jquery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height:"140px",
    //     width:"350px"
    // },"slow")

   
   //this is a console part
     //$('#wiki').animate({opacity:0.3},4000);
    // $('#wiki').animate({opacity:0.9},1000);
    // $('#wiki').animate({width:'350px'},1000);//if u want to stop animation  then $('#wiki').stop();

    //
     //$('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#wiki').empty()
     //$('#wiki').text('you are good')
    // $('#wiki').remove()*/

    //this is console css part
    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')







    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

});

/*
1) What is jQuery?
jQuery is a fast, lightweight, feature-rich client-side JavaScript library. It is cross-platform and supports different types of browsers. It has provided a much-needed boost to JavaScript. Before jQuery, JavaScript codes were lengthy and bigger, even for smaller functions. It makes a website more interactive and attractive.

2) Is jQuery a programming language?
jQuery is not a programming language but a well-written JavaScript code. It is used to traverse documents, event handling, Ajax interaction, and Animation.

3) What is the difference between JavaScript and jQuery?
The simple difference is that JavaScript is a language while jQuery is a built-in library built for JavaScript. jQuery simplifies the use of JavaScript language.


4) Is jQuery replacement of JavaScript?
No, jQuery is not the replacement of JavaScript. jQuery is written on the top of JavaScript, and it is a different library. jQuery is a lightweight JavaScript library which is used to interact with JavaScript and HTML.

5) Why do we use jQuery?
It is very easy to learn and use.
It is used to develop browser compatible web applications.
It improves the performance of an application.
It is very fast and extensible.
It facilitates you to write minimal lines of codes for UI related functions.
It provides cross-browser support.
6) What is $() in jQuery library?
The $() function is an alias of jQuery() function. It is used to wrap any object into jQuery object which later facilitates you to call the various method defined jQuery object. You can pass a selector string to $() function, and it returns a jQuery object which contains an array of all matched DOM elements.

Syntax:
$(document).ready(function() {  
$("p").css("background-color", "pink");  
});  
7) What are the effects methods used in jQuery?
These are some effects methods used in jQuery:

show() - It displays or shows the selected elements.
hide() - It hides the matched or selected elements.
toggle() - It shows or hides the matched elements. In other words, it toggles between the hide() and shows() methods.
fadeIn() - It shows the matched elements by fading it to opaque. In other words, it fades in the selected elements.
fadeOut() - It shows the matched elements by fading it to transparent. In other words, it fades out the selected elements.
jquery effects
8) What is the use of toggle() method in JQuery?
The jQuery toggle() is a particular type of method which is used to toggle between the hide() and show() method. It shows the hidden elements and hides the shown element.

Syntax:
$(selector).toggle();  
$(selector).toggle(speed, callback);  
$(selector).toggle(speed, easing, callback);  
$(selector).toggle(display);  
speed: It is an optional parameter. It specifies the speed of the delay. Its possible values are slow, fast and milliseconds.

easing: It specifies the easing function to be used for transition.

callback: It is also an optional parameter. It specifies the function to be called after completion of toggle() effect.

display: If true, it displays an element. If false, it hides the element.


For more: Click here

9) What is the purpose of fadeToggle() method in JQuery?
The jQuery fadeToggle() method is used to toggle between the fadeIn() and fadeOut() methods. If the elements are faded in, it makes them faded out, and if they are faded out, it makes them faded in.

Syntax:
$(selector).fadeToggle();  
$(selector).fadeToggle(speed,callback);   
$(selector).fadeToggle(speed, easing, callback);  
speed: It is an optional parameter. It specifies the speed of the delay. Its possible values are slow, fast and milliseconds.

easing: It specifies the easing function to be used for transition.

callback: It is also an optional parameter. It specifies the function to be called after completion of fadeToggle() effect.


For more: Click here

10) What is the use of delay() method in JQuery?
The jQuery delay() method is used to delay the execution of functions in the queue. It is the best method to make a delay between the queued jQuery effects. The jQUery delay () method sets a timer to delay the execution of the next item in the queue.

Syntax:
$(selector).delay (speed, queueName)    
speed: It is an optional parameter. It specifies the speed of the delay. Its possible values are slow, fast and milliseconds.


queueName: It is also an optional parameter. It specifies the name of the queue. Its default value is "fx" the standard queue effect.

For more: Click here

11) Is it possible that jQuery HTML work for both HTML and XML document?
No, jQuery HTML only works for HTML document. It doesn't work for XML documents.

12) What is the use of html() method in JQuery?
The jQuery html() method is used to change the entire content of the selected elements. It replaces the selected element content with new contents.

Syntax:
$(document).ready(function(){    
    $("button").click(function(){    
        $("p").html("Hello <b>Javatpoint.com</b>");    
    });    
});    
For complete example: Click here

13) What is the use of css() method in JQuery?
The jQuery CSS() method is used to get (return)or set style properties or values for selected elements. It facilitates you to get one or more style properties. The jQuery CSS() provides two ways:

Return a CSS property
It is used to get the value of a specified CSS property.

$(document).ready(function(){    
    $("button").click(function(){    
        alert("Background color = " + $("p").css("background-color"));    
    });    
});    
Set a CSS property
This property is used to set a specific value for all matched element.

$(document).ready(function(){    
    $("button").click(function(){    
        $("p").css("background-color", "violet");    
    });    
});  
For more: Click here


14) Is jQuery library used for server scripting or client scripting?
It is a library for client-side Scripting.

15) Is jQuery a W3C standard?
No, jQuery is not a W3C standard.

16) What is the starting point of code execution in jQuery?
$(document).ready() function is the starting point of jQuery code.It is executed when DOM is loaded.

17) What is the basic requirement to start with the jQuery?
You need refer to its library to start with jQuery. You can download the latest version of jQuery from jQuery.com.

18) Can you use any other name in place of $ (dollar sign) in jQuery?
Yes, instead of $ (dollar sign) we can use jQuery as a function name. For example:

jQuery(document).ready(function() {    
jQuery("p").css("background-color", "pink");    
});   
19) Can you use multiple document.ready() function on the same page?
Yes. You can use any number of document.ready() function on the same page. For example:

$(document).ready(function() {    
$("h1").css("background-color", "red");    
 });    
$(document).ready(function() {    
$("p").css("background-color", "pink");    
 });    
20) What is the difference between find and children methods?
Find method is used to find all levels down the DOM tree while children method is used to find single level down the DOM tree.

21) What is a CDN?
CDN stands for Content Delivery Network or Content Distribution Network. It is a large distributed system of servers deployed in multiple data centers across the internet. It provides the files from servers at a higher bandwidth that leads to faster loading time. These are several companies that provide free public CDNs:

Google
Microsoft
Yahoo
22) What is the goal of CDN and what are the advantages of using CDN?
The primary goal of the CDN is to provide content to the end-users with high availability and high performance.

Advantages of using CDN:

It reduces the load from the server.
It saves bandwidth. jQuery framework is loaded faster from these CDN.
If a user regularly visits a site which is using jQuery framework from any of these CDN, it will be cached.
23) How can you use a jQuery library in your project?
You can use a jQuery library in the ASP.Net project from downloading the latest jQuery library from jQuery.com and include the references to the jQuery library file in your HTML/PHP/JSP/Aspx page.

<script src="_scripts/jQuery-1.2.6.js" type="text/javascript"></script>   
<script language="javascript">   
$(document).ready(function() {   
alert('test');   
});   
</script>  
24) What are the selectors in jQuery? How many types of selectors in jQuery?
If you want to work with an element on the web page, first you need to find it. Selectors find the HTML elements in jQuery. There are many types of selectors. Some basic selectors are:

Name: It is used to select all elements which match with the given element Name.
#ID: It is used to select a single element which matches with the given ID
.Class: It is used to select all elements which match with the given Class.
Universal (*): It is used to select all elements available in a DOM.
Multiple Elements E, F, G: It is used to selects the combined results of all the specified selectors E, F or G.
Attribute Selector: It is used to select elements based on its attribute value.
25) What is a use of jQuery filter?
: jQuery filter is used to filter the specific values from the object. It filters the result of your original query into specific elements.

26) What are the different types of selectors in jQuery?
There are three types of selectors in jQuery:

CSS Selector
Custom Selector
XPath Selector
27) What is the difference between the ID selector and class selector in jQuery?
ID selector and class selector are the same as they are in CSS. ID selector uses ID while class selector uses a class to select elements.

You use an ID selector to select just one element. If you want to select a group of elements, having the same CSS class, use class selector.

28) What is the use of serialize() method in JQuery?
The jQuery serialize() method is used to create a text string in standard URL-encoded notation. It serializes the form values so that its serialized values can be used in the URL query string while making an AJAX request.

Syntax:
$(document).ready(function(){    
    $("button").click(function(){    
        $("div").text($("form").serialize());    
    });    
});     
For complete example: Click here

29) What is the use of val() method in JQuery?
The jQuery val() method is used:

To get the current value of the first element in the set of matched elements.
To set the value of every matched element.
Syntax:
$(selector).val()  
For complete example: Click here

30) How to add and remove CSS classes to an element using jQuery?
You can use addclass() jQuery method to add CSS class to an element and removeclass() jQuery method to remove CSS class from an element.

CSS addClass() Example
<!DOCTYPE html>    
<html>    
<head>    
 <title>jQuery Example</title>    
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
 </script>    
 <script type="text/javascript" language="javascript">    
$(document).ready(function()  
{  
$("#btn").click(function()  
{  
    $("#para").addClass("change");  
});  
});  
 </script>    
<style>  
    .change  
    {  
        color:blue;  
    }  
</style>  
 </head>    
<body>    
<p id="para">This method adds CSS class from an element</p>    
<input type="button" id="btn" value="Click me">   
</body>    
</html>    
CSS removeClass() Example
<!DOCTYPE html>    
<html>    
<head>    
 <title>jQuery Example</title>    
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
 </script>    
 <script type="text/javascript" language="javascript">    
$(document).ready(function()  
{  
$("#btn").click(function()  
{  
    $("p").removeClass("change");  
});  
});  
 </script>    
<style>  
    .change  
    {  
        color:blue;  
    }  
</style>  
 </head>    
<body>    
<p class="change">This method removes CSS class to an element</p>    
<input type="button" id="btn" value="Click me">   
</body>    
</html>  
31) Can you write a jQuery code to select all links inside the paragraph?
Yes. You can use <a> tag nested inside paragraph <p> tag to select all links. For example:

<!DOCTYPE html>    
<html>    
<head>    
 <title>jQuery Example</title>    
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">    
 </script>    
 <script type="text/javascript" language="javascript">    
$(document).ready(function()  
{  
    $("p a").attr("href", "https://www.javatpoint.com");  
});  
 </script>    
 </head>    
<body>    
    <p><a>Learn JavaScript</a></p>  
    <p><a>Learn jQuery</a></p>   
</body>     
</html>    
32) What is the difference between prop and attr?
attr(): It gets the value of an attribute for the first element in the set of matched element.

prop(): it gets the value of a property for the first element in the set of matched elements. It is introduced in jQuery 1.6.

33) What are the two types of CDNs?
There are two types of CDN:

Microsoft: It loads jQuery from AJAX CDN.
Google: It loads jQuery from Google libraries API.
34) What is the use of the animate() method in jQuery?
The animate function is used to apply the custom animation effect to elements. Syntax:


$(selector).animate({params}, [duration], [easing], [callback])  
Here,

"param" defines the CSS properties on which you want to apply the animation.
"duration" specify how long the animation run. It can be one of the following values: "slow," "fast," "normal" or milliseconds
"easing" is the string which specifies the function for the transition.
"callback" is the function which we want to run once the animation effect is complete.
35) How can you disable jQuery animation?
By using jQuery property "jQuery.fx.off" and setting it to true, you can disable jQuery animation.
*/ 


