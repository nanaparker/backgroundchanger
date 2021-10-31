var clicks = 0;

function backChanger(){
    var colors = ["red", "green", "yellow", "azure", "coral", "darkcyan", "aqua"];

    document.body.style.background = colors[clicks];
    clicks++;

    if (clicks === colors.length){
        clicks = 0;
    }
    
}