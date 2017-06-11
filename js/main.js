/*
Task 1

1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
5. After the loop, use alert to print collect*/

// 1.
var tagLine = document.getElementById("tag-line");
console.log("tagLine: ", tagLine);

// 2.
var headings = document.querySelectorAll(".bg-main-content h2");
console.log("headings: ", headings);

// 3.
var collect = tagLine.innerHTML + "\n_________________________________________\n\n";
console.log("collect: ", collect);

// 4.
var i;

for (i = 0; i < headings.length; i += 1) {
    collect += headings[i] .innerHTML + "\n";
}

//headings[0]
// 5. print your collect here

alert(collect);


/*
Task 2

1. Access 13th div with class name box that belongs to div with the class name bg-main-content.
You can name the variable when_to_launch.
2. Use property children to "scoop" in array all HTML elements that belong to that div.
3. Create the variable collect and assign it with content of heading that belongs to gotten array.
4. Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
5. After the loop, use alert to print collect

Printed output:
*/

// 1. and 2.
var launch = document.querySelectorAll(".bg-main-content .box")[12].children;


// 3.
var collect = launch[0].innerHTML + "\n_________________________________________\n\n";
console.log("collect: ", collect);

// 4.
for (i = 1; i < launch.length; i += 1) {
    collect += launch[i] .innerHTML + "\n\n";
}



alert(collect);

