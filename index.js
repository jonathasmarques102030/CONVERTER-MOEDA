function funcional(){
    const valorConverter = document.getElementById("valor");
    const valor = valorConverter.value;
    const valorNumerico = parseFloat(valor);
    const valorConvertido = valorNumerico*5;

    const elemento = document.querySelector("h2")
    const real = "O valor convertido para dollar é " + valorConvertido;

    

    if(valorConvertido > 0){
        elemento.innerHTML = real
    }else {
        elemento.innerHTML = "Ta errado isso aqui"
    }
}