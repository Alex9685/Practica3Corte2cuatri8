//Obtencion de los valores 




function Calcular(){

  
    
    let valor = document.getElementById('valor').value;
    let opcion = document.getElementById('opciones').value;
    let enganche = document.getElementById('txtEnganche');
    let financiar = document.getElementById('txtFinanciar');
    let Pago = document.getElementById('txtPago');
    Limpiar();


    let enganche2 = valor*0.3;
    let financiar2 = valor-enganche2;
    let pagoMensual

    if(opcion==12){
        financiar2 = financiar2 + (financiar2*0.125);
        pagoMensual=financiar2/opcion;
    }else if(opcion==18){
        financiar2 = financiar2 + (financiar2*0.172);
        pagoMensual=financiar2/opcion;
    }else if(opcion==24){
        financiar2 = financiar2 + (financiar2*0.21);
        pagoMensual=financiar2/opcion;
    }else if(opcion==36){
        financiar2 = financiar2 + (financiar2*0.26);
        pagoMensual=financiar2/opcion;
    }else if(opcion==48){
        financiar2 = financiar2 + (financiar2*0.45);
        pagoMensual=financiar2/opcion;
    }

    enganche.innerHTML=enganche.innerHTML+enganche2;
    financiar.innerHTML=financiar.innerHTML+financiar2;
    Pago.innerHTML=Pago.innerHTML+pagoMensual;
}

function Limpiar(){
    let valor = document.getElementById('valor').value;
    let enganche = document.getElementById('txtEnganche');
    let financiar = document.getElementById('txtFinanciar');
    let Pago = document.getElementById('txtPago');

    enganche.innerHTML="";
    financiar.innerHTML="";
    Pago.innerHTML="";
    
}
    