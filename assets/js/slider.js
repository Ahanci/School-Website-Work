var slide=document.querySelectorAll('.slide');
var gelen=1;
     var giden=0;
        var zamanla=setInterval(slider,2000);

        document.getElementById("ileri").onclick=function(){
            slider();
        }
        document.getElementById("geri").onclick=function(){
            //geri gelmek için aşağıdaki kodları yazdım, 17.04 tarihli dersin son 30 dk sında var bu(bu kaydı internetten izleyebilirsin)
            if(gelen>=2){
                gelen-=2;
            }
            else{
                gelen+=10;
            }
            slider();
        }
        document.getElementsByClassName('main')[0].onmouseover=function(){
            clearInterval(zamanla);
        }
        document.getElementsByClassName('main')[0].onmouseout=function(){
            clearInterval(zamanla);// hata verme olasılığına karşı intervali temizle;
            zamanla=setInterval(slider,1000); //mouse slide üstünden gidince tekrar slide başlıyor.
        }
        document.getElementById("ileri").onclick=function(){
            slider();
        }
        function slider (){
           
            slide[gelen].style.animation='left_to_center 1s ease';
            slide[gelen].style.right=0;
            slide[giden].style.animation='center_to_left 1s ease';
            slide[giden].style.right='-100%';
            liElement[giden].classList.remove("active");// slider dan ayrılan resimden active class ını kaldırıyorum.
            liElement[gelen].classList.add("active")// slider a gelen li elemente active ekliyorum ki geldiğinde veya tıkladığımda noktanın rengi değişsin.
            giden=gelen;  // diyorum ki gelen gidecek
            gelen++;
            if(gelen>=slide.length){
                gelen=0;}
            
           }
            var liElement=document.querySelectorAll("ul li");
        for(var i=0;i<liElement.length;i++){
            liElement[i].onclick=function(){
               gelen =parseInt(this.getAttribute("data-index"));
               slider();
            }
        }