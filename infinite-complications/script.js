// Code that just goes crazy AAHHH and goes stupid ADOAHDAHAHDAD

function commence() {
    console.log("The chaos began.");
    switch(i_random_range(1,1)) {
        case 1:
          phase1();
          break;
        case 2:          
          break;
        default:
          console.log("It broke.")
    }
}

function i_random_range(a,b) {
    return Math.floor(Math.random()*(b-a+1)+a);  
}

function phase1() {
    var btn = document.createElement("input");
    btn.setAttribute("type", "button"); 
    btn.setAttribute("value", "Submit"); 
    btn.setAttribute("onclick", "button1()"); 
    document.getElementById("sorry").appendChild(btn);    
}

function button1() {
    for (var i = 0; i < i_random_range(1,30); i++) {
        var btn = document.createElement("input");
        btn.setAttribute("type", "button"); 
        btn.setAttribute("value", i); 
        btn.setAttribute("onclick", "button2()"); 
        document.getElementById("sorry").appendChild(btn);
    }    
}

function button2() {
    
}

window.onload = commence;