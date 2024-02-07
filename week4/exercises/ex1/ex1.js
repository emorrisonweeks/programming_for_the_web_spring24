//select empty div and assign it to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv")
;
//put an h1 inside of it
//create a new element
const heading = document.createElement("h1");
heading.innerHTML = "This llama doesn't want any drama.";
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick )
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log("heading has been clicked");
    document.body.style.backgroundColor = "skyblue";
}