
if (screen.width > 500) { 
    // if Mobile
}else{
    // if Pc 
    document.body.style.background = 'rgba(10,10,120,0.5)'; 
} 

function Btn_Alert_1(){ 
    document.body.style.background = 'rgba(100,200,32,0.5)';
    alert("بص بقا الصفحة هتقلبلك اخضر لموني ايه عجب ^_^");
}
function Btn_Alert_2(){
    document.body.style.background = 'rgba(120,10,200,0.5)';
    alert("استنا هخليلك الصفحة بنفسجي علي دماغك دلوقتي");
}
function Btn_Alert_3(){
    document.body.style.background = 'rgba(90,0,0,0.5)';
    alert("ريح دماغك مش حاطت حاجة هنا");
    
}


document.getElementById("Click_1").onclick = function() {
    
    if (screen.width > 500) { 
        // if Mobile
        document.body.style.background = 'rgba(0,0,0,0.0)';
    }else{
        // if Pc 
        document.body.style.background = 'rgba(10,10,120,0.5)'; 
    } 
    
}
