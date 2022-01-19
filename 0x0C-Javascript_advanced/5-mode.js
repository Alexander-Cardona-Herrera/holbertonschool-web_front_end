function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size
        document.body.style.fontWeight = weight
        document.body.style.textTransform = transform
        document.body.style.backgroundColor = background
        document.body.style.color = color
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);

    let Spooky = document.createElement("button");
    Spooky.innerHTML = "Spooky"
    Spooky.onclick = spooky();
    document.body.appendChild(Spooky);

    let DarkMode = document.createElement("button");
    DarkMode.innerHTML = "Darkmode"
    DarkMode.onclick = darkMode();
    document.body.appendChild(DarkMode);

    let ScreamMode = document.createElement("button");
    ScreamMode.innerHTML = "Scream mode"
    ScreamMode.onclick = screamMode();
    document.body.appendChild(ScreamMode);
}

main();