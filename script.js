function verificar(){
    nro1=Number(document.querySelector("#valor1").value)
    nro2=Number(document.querySelector("#valor2").value)
    nro3=Number(document.querySelector("#valor3").value)
    texto=document.querySelector("#muestra")

    if(nro1==9 && nro2==1 && nro3==1){
        texto.innerHTML="La password 1 es correcta"
    }else{
        if(nro1==7 && nro2==1 && nro3==4){
            texto.innerHTML="La password 2 es correcta"
        }else{
            texto.innerHTML="La contraseña NO es correcta"
        };
    };
};