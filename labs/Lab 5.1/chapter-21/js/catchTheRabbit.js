let attempts = 0;
window.addEventListener("load", function (event) {
    // get elements from document
    noeggs = document.getElementById("noeggs");
    slow = document.getElementById("slow");
    rabbit1 = document.getElementById("rabbit1");
    rabbit2 = document.getElementById("rabbit2");
    rabbit3 = document.getElementById("rabbit3");
    rabbit4 = document.getElementById("rabbit4");
    // initialise display
    noeggs.style["visibility"] = "hidden";
    slow.style["visibility"] = "hidden";
    rabbit1.style["visibility"] = "visible";
    rabbit2.style["visibility"] = "hidden";
    rabbit3.style["visibility"] = "hidden";
    rabbit4.style["visibility"] = "hidden";
    // add mouseover event listeners
    rabbit1.addEventListener("click", rabbit1Click);
    rabbit2.addEventListener("click", rabbit2Click);
    rabbit3.addEventListener("click", rabbit3Click);
    rabbit4.addEventListener("click", rabbit4Click);
});
function rabbit1Click(event) {
    rabbit1.style["visibility"] = "hidden";
    rabbit2.style["visibility"] = "visible";
    attempts += 1;
    console.log(attempts);
}
function rabbit2Click(event) {
    rabbit2.style["visibility"] = "hidden";
    rabbit3.style["visibility"] = "visible";
    attempts += 1;
    console.log(attempts);
}
function rabbit3Click(event) {
    rabbit3.style["visibility"] = "hidden";
    rabbit4.style["visibility"] = "visible";
    attempts += 1;
    console.log(attempts);
}
function rabbit4Click(event) {
    rabbit4.style["visibility"] = "hidden";
    rabbit1.style["visibility"] = "visible";
    attempts += 1;
    console.log(attempts);
    if (attempts === 4) {
    noeggs.style["visibility"] = "visible";
    }
    if (attempts === 20) {
        slow.style["visibility"] = "visible";
    }
}