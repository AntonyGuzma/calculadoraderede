function convert(){ 
    var num1 = document.querySelector("#oct1").value
    var num2 = document.querySelector("#oct2").value
    var num3 = document.querySelector("#oct3").value
    var num4 = document.querySelector("#oct4").value

    if(num1>255 || num2>255 || num3>255 || num4>255) //Verifica se os octetos são maiores que 255
    {
        alert("Valor invalido!")
    }
    else if((num2==255 && num3==255 && num4==255) || (num3==255 && num4==255) || (num4==255)){ //Verifica se tem valores de brodcast
        alert("Valor de brodcast ou inválido!")
    }
    else if(num1!=255 && num2==0 && num3==0 && num4==0){ //Verifica se o valor é um endereço de rede
        alert("O valor é um endereço de rede ou inválido!")
    }
    else if((num1==255 && num2==255 && num3==255 && num4==0) || (num1==255 && num2==255 && num3==0 && num4==0)
     || (num1==255  && num2==0  && num3==0 && num4==0)){
        alert("O valor é uma mascara ou inválido!")
    }
    else if(num2==0 && num3==0){
        alert("O valor não é válido!")
    }
    else{

    //Converter para binario       
    var dec1 = parseInt(num1)
    var bin1 = dec1.toString(2)
    
    var count = Object.keys(bin1).length; //Conta a quantidade de bits
    count=8-count
    if(count==1){
        bin1 = "0"+bin1;
    }
    if(count==2){
        bin1 = "00"+bin1;
    }
    if(count==3){
        bin1 = "000"+bin1;
    }
    if(count==4){
        bin1 = "0000"+bin1;
    }
    if(count==5){
        bin1 = "00000"+bin1;
    }
    if(count==6){
        bin1 = "000000"+bin1;
    }
    if(count==7){
        bin1 = "0000000"+bin1;
    }
    if(count==8){
        bin1 = "00000000"+bin1;
    }


    var dec2 = parseInt(num2)
    var bin2 = dec2.toString(2)
    var count = Object.keys(bin2).length; //Conta a quantidade de bits
    count=8-count
    if(count==1){
        bin2 = "0"+bin2;
    }
    if(count==2){
        bin2 = "00"+bin2;
    }
    if(count==3){
        bin2 = "000"+bin2;
    }
    if(count==4){
        bin2 = "0000"+bin2;
    }
    if(count==5){
        bin2 = "00000"+bin2;
    }
    if(count==6){
        bin2 = "000000"+bin2;
    }
    if(count==7){
        bin2 = "0000000"+bin2;
    }
    if(count==8){
        bin2 = "00000000"+bin2;
    }

    
    var dec3 = parseInt(num3)
    var bin3 = dec3.toString(2)
    var count = Object.keys(bin3).length; //Conta a quantidade de bits
    count=8-count
    if(count==1){
        bin3 = "0"+bin3;
    }
    if(count==2){
        bin3 = "00"+bin3;
    }
    if(count==3){
        bin3 = "000"+bin3;
    }
    if(count==4){
        bin3 = "0000"+bin3;
    }
    if(count==5){
        bin3 = "00000"+bin3;
    }
    if(count==6){
        bin3 = "000000"+bin3;
    }
    if(count==7){
        bin3 = "0000000"+bin3;
    }
    if(count==8){
        bin3 = "00000000"+bin3;
    }
    

    var dec4 = parseInt(num4)
    var bin4 = dec4.toString(2)
    var count = Object.keys(bin4).length; //Conta a quantidade de bits
    count=8-count
    if(count==1){
        bin4 = "0"+bin4;
    }
    if(count==2){
        bin4 = "00"+bin4;
    }
    if(count==3){
        bin4 = "000"+bin4;
    }
    if(count==4){
        bin4 = "0000"+bin4;
    }
    if(count==5){
        bin4 = "00000"+bin4;
    }
    if(count==6){
        bin4 = "000000"+bin4;
    }
    if(count==7){
        bin4 = "0000000"+bin4;
    }
    if(count==8){
        bin4 = "00000000"+bin4;
    }
    
    
    //document.write(bin1+"."+bin2+"."+bin3+"."+bin4)

    //Identifar a classe, endereço de rede, máscara, brodcast
    var classe
    var end_rede =  num1+".0.0.0"   
    var mascara
    var brodcast
    var binario_mascara
    var binario_brodcast
    var binario_prim_end
    var binario_ult_end

    if(num1>=1 && num1<=127){
        classe="A"
        mascara = "255.0.0.0"
        brodcast = num1+".255.255.255"
        prim_end = num1+".0.0.1"
        ult_end = num1+".255.255.254"
        binario_mascara="11111111.00000000.00000000.00000000"
        binario_brodcast = bin1+".11111111.11111111.11111111"
        binario_prim_end = bin1+".00000000.00000000.00000001"
        binario_ult_end = bin1+".11111111.11111111.11111110"
    }
    else if(num1>=128 && num1<=191){
        classe="B"
        mascara = "255.255.0.0"
        brodcast = num1+"."+num2+".255.255"
        prim_end = num1+"."+num2+".0.1"
        ult_end = num1+"."+num2+".255.254"
        binario_mascara="11111111.11111111.00000000.00000000" 
        binario_brodcast = bin1+"."+bin2+".11111111.11111111"
        binario_prim_end = bin1+"."+bin2+".00000000.00000001"
        binario_ult_end = bin1+"."+bin2+".11111111.11111110"   
    }
    else if(num1>=192 && num1<=223){
        classe="C"
        mascara = "255.255.255.0"
        brodcast = num1+"."+num2+"."+num3+".255"
        prim_end = num1+"."+num2+"."+num3+".1"
        ult_end = num1+"."+num2+"."+num3+".254"
        binario_mascara="11111111.11111111.11111111.00000000"  
        binario_brodcast = bin1+"."+bin2+"."+bin3+".11111111"
        binario_prim_end = bin1+"."+bin2+"."+bin3+".00000001"
        binario_ult_end = bin1+"."+bin2+"."+bin3+".11111110"    
    }

    document.write("<br>Classe: "+classe)
    document.write("<br>End Rede: "+end_rede)
    document.write("<br>Mascara: "+mascara)
    document.write("<br>Brodcast: "+brodcast)
    document.write("<br>Primeiro endereço: "+prim_end)
    document.write("<br>Ultimo endereço: "+ult_end)
    document.write("<br>IP em binário: "+bin1+"."+bin2+"."+bin3+"."+bin4)
    document.write("<br>Mascara em Binario: "+binario_mascara)
    document.write("<br>Brodcast em Binario: "+binario_brodcast)
    document.write("<br>1° endereço em Binario: "+binario_prim_end)
    document.write("<br>Ultimo endereço em Binario: "+binario_ult_end)
}
}