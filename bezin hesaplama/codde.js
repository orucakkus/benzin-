function hesapla(){
    let benzin=document.getElementById("benzin").value
    let sonuc=(Number(benzin))* 19;
    let para=document.getElementById("para").value
    let sonucas=(Number(para))/ 19;
    document.getElementById("sonucs").innerHTML="2 = bu kadar TL eder= " + sonuc .toFixed(1)
    console.log(sonucas)
    document.getElementById("sonus").innerHTML="1 = bu kadar LT Benzin eder = " + sonucas .toFixed(1)
    if(sonuc<=500){
        document.getElementById("durum").innerHTML="PARA YETERDE "
        document.body.style.backgroundColor="green"
    }
    else if (sonuc>1000){
        document.getElementById("durum").innerHTML="çoluk çoçuk aç kaldı!!"
        document.body.style.backgroundColor="red"
    }
}


function sıfırla(){
    document.getElementById("sonucs").innerHTML=""
    document.getElementById("durum").innerHTML=""
    document.getElementById("sonus").innerHTML=""
    document.body.style.backgroundColor="white"
}