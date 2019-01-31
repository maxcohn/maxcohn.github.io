var time = {
    seconds: 0
}

time.increase = function(s){
    this.seconds += s
}

time.decrease = function(s){
    // decrease the time by the number of seconds specified
    this.seconds -= s;
}

// TODO rename
time.format = function(){
    let h = Math.floor(this.seconds / 3600);
    let m = Math.floor((this.seconds % 3600) / 60)
    let s = Math.floor((this.seconds % 3600) % 60)
    
    return {h,m,s}
}

function display({h, m, s}){
    $("#hours").text(h);
    $("#minutes").text(m);
    $("#seconds").text(s);
}


//debug

time.seconds = 10000;


$(document).ready(function(){
    display(time.format());

});