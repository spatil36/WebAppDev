function cel2farh() {
    var cel = document.getElementById("c");
    var far = document.getElementById("f");

    if(cel.value == ""){
        alert("Please enter celcius value for conversion");
        cel.focus();
        return false;
    }

    var celv = cel.value;
    
    var ans = (celv*9/5)+32;

    far.value = ans;

    return true;
    
}

function kg2lbs() {

    var kilo = document.getElementById("k");
    var pound = document.getElementById("lbs");

    if(kilo.value == ""){
        alert("Please enter kilogrma value for conversion");
        kilo.focus();
        return false;
    }

    var ans1 = kilo.value * 2.2;
    pound.value = ans1;

    return true;
}

function d2m() {

    var dist = document.getElementById("di");
    var mile = document.getElementById("mi");

    if(dist.value == ""){
        alert("Please enter distance value for conversion");
        dist.focus();
        return false;
    }

    var ans1 = dist.value * 0.62137;
    mile.value = ans1;

    return true;
}