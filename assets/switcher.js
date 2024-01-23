// change and remember the selected style
if (!localStorage.getItem('styleSet')) {
    localStorage.setItem("styleSet", "flat")
}

function change() {
    if (localStorage.getItem('styleSet') == 'default') {
        localStorage.setItem("styleSet", 'flat');
        document.getElementById("styleSwitch").checked = false;
        document.getElementById("logo").src="assets/img/th-logomark-light.svg";
    } else {
        localStorage.setItem("styleSet", 'default');
        document.getElementById("styleSwitch").checked = true;
        document.getElementById("logo").src="assets/img/th-logomark-dark.svg";
    }

    var classStyle = String(localStorage.getItem('styleSet'));
    let root = document.documentElement;
    document.body.className = (classStyle);
}
var classStyle = String(localStorage.getItem('styleSet'));
let root = document.documentElement;
document.body.className = (classStyle);
if (localStorage.getItem('styleSet') == 'default') {
    document.getElementById("styleSwitch").checked = true;
    document.getElementById("logo").src="assets/img/th-logomark-dark.svg";
} else {
    document.getElementById("styleSwitch").checked = false;
    document.getElementById("logo").src="assets/img/th-logomark-light.svg";
}