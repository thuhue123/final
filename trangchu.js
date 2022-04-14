var k=0;
var hinh = [];
var vth = 0;
for(var i=0;i<5;i++){
    hinh[i] = new Image();
    hinh[i].src = "./images/HINH"+(i+1)+".jpg";
}

function loadAnh(){
    var t = document.getElementById("slideshow");
    t.src = hinh[k].src;
    if(k==4){
        k=0;
    } else{
        k++;
    }
    document.getElementById("soanh").innerHTML=k+1+"/8";
}

function next(){ 
    if(k == 4){
       k = 0
    }else{
        k++;      
    }
    var hinhh = document.getElementById("slideshow");
        hinhh.src = hinh[k].src;
        document.getElementById("soanh").innerHTML=k+1+"/8";
      
}

function back(){ 
    if(k == 0){
       k = 4;
    }else{
        k--;      
    }
    var hinhb = document.getElementById("slideshow");
        hinhb.src = hinh[k].src;
        document.getElementById("soanh").innerHTML=k+1+"/8";
        
}
