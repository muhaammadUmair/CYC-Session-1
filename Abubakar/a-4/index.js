function row1() {
    document.getElementById("row1").removeAttribute("hidden");
    document.getElementById("row2").setAttribute("hidden", "true");
    document.getElementById("row3").setAttribute("hidden", "true");
    document.getElementById("row4").setAttribute("hidden", "true");
    document.getElementById("row5").setAttribute("hidden", "true");
};
function row2() {
    document.getElementById("row2").removeAttribute("hidden");
    document.getElementById("row1").setAttribute("hidden", "true");
    document.getElementById("row3").setAttribute("hidden", "true");
    document.getElementById("row4").setAttribute("hidden", "true");
    document.getElementById("row5").setAttribute("hidden", "true");
};
function row3() {
    document.getElementById("row3").removeAttribute("hidden");
    document.getElementById("row1").setAttribute("hidden", "true");
    document.getElementById("row2").setAttribute("hidden", "true");
    document.getElementById("row4").setAttribute("hidden", "true");
    document.getElementById("row5").setAttribute("hidden", "true");

};
function row4() {
    document.getElementById("row4").removeAttribute("hidden");
    document.getElementById("row1").setAttribute("hidden", "true");
    document.getElementById("row2").setAttribute("hidden", "true");
    document.getElementById("row3").setAttribute("hidden", "true");
    document.getElementById("row5").setAttribute("hidden", "true");


};
