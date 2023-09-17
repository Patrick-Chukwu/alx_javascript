#!/usr/bin/node

// changing DOM with closure

function changeMode(size, weight, transform, background, color) {

    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;

    }
    
}

function main()  {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const body = document.body;

    //add paragragh
    const paragragh = document.createElement("p");
    const paragraghText = document.createTextNode("Welcome Holberton!");
    paragragh.appendChild(paragraghText);
    body.appendChild(paragragh);

    //add button
    const btn1 = document.createElement("button");
    const btn1Text = document.createTextNode("Spooky");
    btn1.appendChild(btn1Text);
    body.appendChild(btn1);
    btn1.addEventListener("click", function () {
        spooky();
    })

    //add second button
    const btn2 = document.createElement("button");
    const btn2Text = document.createTextNode("Dark mode");
    btn2.appendChild(btn2Text);
    body.appendChild(btn2);
    btn2.addEventListener("click", function () {
        darkMode();
    
    })

    //add third button 
    const btn3 = document.createElement("button");
    const btn3Text = document.createTextNode("scream mode");
    btn3.appendChild(btn3Text);
    body.appendChild(btn3);
    btn3.addEventListener("click", function () {
        screamMode();
    })




}

main();