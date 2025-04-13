//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import { React } from "react";
import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("root"));
let name = "Arnold";
let location = "Columbus";
let time = new Date().getHours();

let greeting = "";
let headingColor = {
  color: "blue",
};

if (time >= 0 && time < 12) {
  greeting = "Good Morning";
  headingColor.color = "red";
} else if (time >= 12 && time < 18) {
  greeting = "Good Afternoon";
  headingColor.color = "green";
} else {
  greeting = "Good Evening";
}

root.render(
  <div>
    <h1 className="heading" style={headingColor}>
      {greeting} {name}, it is {time} in {location}
    </h1>
  </div>
);
