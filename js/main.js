//Obtencion de los valores 




function Calcular(){
    let valor = document.getElementById('valor').value;
    let tabla = document.getElementById('tab').value;
    let enganche = document.getElementById('txtEnganche');
    let financiar = document.getElementById('txtFinanciar');
    let Pago = document.getElementById('txtPago');


    let enganche2 = valor*0.3;
    let financiar2 = valor-enganche2;
    let pagoMensual

    if(tabla=12){
        financiar2 = financiar2 + (financiar2*0.125);
        pagoMensual=financiar2/12;
    }else if(tabla=18){
        financiar2 = financiar2 + (financiar2*0.172);
        pagoMensual=financiar2/18;
    }else if(tabla=24){
        financiar2 = financiar2 + (financiar2*0.21);
        pagoMensual=financiar2/24;
    }else if(tabla=36){
        financiar2 = financiar2 + (financiar2*0.26);
        pagoMensual=financiar2/36;
    }else if(tabla=48){
        financiar2 = financiar2 + (financiar2*0.45);
        pagoMensual=financiar2/48;
    }

    enganche.innerHTML=enganche.innerHTML+enganche2;
    financiar.innerHTML=financiar.innerHTML+financiar2;
    Pago.innerHTML=Pago.innerHTML+pagoMensual;
}