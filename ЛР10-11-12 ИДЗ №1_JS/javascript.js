function formula(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let s = 0.0;
    let view = "";

    s = (b + Math.sqrt(Math.pow(b, 2) + 4*a*c)) / 2*a - Math.pow(a, 3)*c + Math.pow(b, -2);
    view += s;
    
    var p = document.createElement("p");
    p.textContent = view;
    document.body.appendChild(p);
}