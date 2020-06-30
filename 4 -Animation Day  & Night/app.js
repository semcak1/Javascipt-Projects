


const darkMode = document.querySelector("#sun");

let toggle=false;


//we need to click on the sun

darkMode.addEventListener('click',function(){

    const replacinImg=  document.getElementById("sun").setAttribute("src", "img/moon.png");

    //  anime.js i kullanıyoruz.

    // burda anime nesnesinden timeline ı oluşturduk. Timeline içine nesne alıyor bu yüzden süslü parantez ile nesne yazdık. 

    // animasyon saniye saniye ilerler timeline ı bu yüzden oluşturduk. hangi saniyede ne yapılacağını yazmak için.
   
    const timeline= anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    // timeline a farklı animasyonlar eklemek için.

    timeline.add({
        targets : "#sun",
        d : [
            {
                value : replacinImg
            }
        ]
            
        
    })
    .add(
        {
            targets :"section",
            backgroundColor : "rgb(22,22,22)"
        }
    );
        console.log(!toggle);
        if(!toggle)
        {
            toggle=true;
        }
        else{
                toggle=false;
        }

});