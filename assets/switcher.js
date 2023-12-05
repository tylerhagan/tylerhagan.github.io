if (!localStorage.getItem('styleSet')) {
    localStorage.setItem("styleSet", "flat")
}

function change() {
    if (localStorage.getItem('styleSet') == 'default') {
    localStorage.setItem("styleSet", 'flat');
    document.getElementById("styleSwitch").checked = false;
    } else {
    localStorage.setItem("styleSet", 'default');
    document.getElementById("styleSwitch").checked = true;
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
} else {
    document.getElementById("styleSwitch").checked = false;
}