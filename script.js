function convert(){ 
    var tbl = document.querySelector("table")

    var tblclasse = document.getElementById("nomeclasse") //Nome da Classe na tabela
    var tblendereco = document.getElementById("endereco") //Nome do ENdereço na tabela
    var tblmascara = document.getElementById("mascara") //Nome da Mascara na tabela
    var tblbroadcast = document.getElementById("broadcast") //Nome do broadcast na tabela
    var tblpendereco = document.getElementById("pendereco") //Nome do 1º Endereço na tabela
    var tbluendereco = document.getElementById("uendereco") //Nome do Ultimo Endereço na tabela
    var tblbinendereco = document.getElementById("binendereco") //Nome Endereço na tabela em Binario
    var tblbinmascara = document.getElementById("binmascara") //Nome da Macara na tabela em Binario
    var tblbinbroadcast = document.getElementById("binbroadcast") //Nome do Broadcast na tabela em Binario
    var tblbinpendereco = document.getElementById("binpendereco") //Nome do 1º endereço na tabela em Binario
    var tblbinuendereco = document.getElementById("binuendereco") //Nome ultimo endereço na tabela em Binario

    //Valores recebidos do formulário;
    var num1 = document.querySelector("#oct1").value 
    var num2 = document.querySelector("#oct2").value
    var num3 = document.querySelector("#oct3").value
    var num4 = document.querySelector("#oct4").value

    if(num1>255 || num2>255 || num3>255 || num4>255) //Verifica se os octetos são maiores que 255
    {
        alert("Valor invalido!")
    }
    else if((num2==255 && num3==255 && num4==255) || (num3==255 && num4==255) || (num4==255)){ //Verifica se é endereço de brodcast
        alert("Valor de brodcast ou inválido!")
    }
    else if((num1!=255 && num2==0 && num3==0 && num4==0) || (num1!=255 && num3==0 && num4==0) || (num1!=255 && num4==0)  ){ //Verifica se é endereço de rede
        alert("O valor é um endereço de rede ou inválido!")
    }
    else if((num1==255 && num2==255 && num3==255 && num4==0) || (num1==255 && num2==255 && num3==0 && num4==0)
     || (num1==255  && num2==0  && num3==0 && num4==0)){ //Verifica se é uma máscara
        alert("O valor é uma mascara ou inválido!")
    }
    else if(num1==127 && num2==0 && num3==0 && num4==1){ //Verifica se é loopBack
        alert("O valor é um loopback ou inválido!")
    }
    else{
        //Converter para binario   
        var dec1 = parseInt(num1)
        var bin1 = dec1.toString(2)          
        var count = Object.keys(bin1).length; //Conta a quantidade de bits
        count=8-count //Calcula quantos bits faltam para inteirar 8 bits

        //Em seguida estamos acrescentando os zeros a esquerda, para manter os 8 bits na saída
        if(count==1){
            bin1 = "0"+bin1;
        }
        else if(count==2){
            bin1 = "00"+bin1;
        }
        else if(count==3){
            bin1 = "000"+bin1;
        }
        else if(count==4){
            bin1 = "0000"+bin1;
        }
        else if(count==5){
            bin1 = "00000"+bin1;
        }
        else if(count==6){
            bin1 = "000000"+bin1;
        }
        else if(count==7){
            bin1 = "0000000"+bin1;
        }
        else if(count==8){
            bin1 = "00000000"+bin1;
        }

        var dec2 = parseInt(num2)
        var bin2 = dec2.toString(2)
        var count = Object.keys(bin2).length; //Conta a quantidade de bits
        count=8-count //Calcula quantos bits faltam para inteirar 8 bits

        //Em seguida estamos acrescentando os zeros a esquerda, para manter os 8 bits na saída
        if(count==1){
            bin2 = "0"+bin2;
        }
        else if(count==2){
            bin2 = "00"+bin2;
        }
        else if(count==3){
            bin2 = "000"+bin2;
        }
        else if(count==4){
            bin2 = "0000"+bin2;
        }
        else if(count==5){
            bin2 = "00000"+bin2;
        }
        else if(count==6){
            bin2 = "000000"+bin2;
        }
        else if(count==7){
            bin2 = "0000000"+bin2;
        }
        else if(count==8){
            bin2 = "00000000"+bin2;
        }
       
        var dec3 = parseInt(num3)
        var bin3 = dec3.toString(2)
        var count = Object.keys(bin3).length; //Conta a quantidade de bits
        count=8-count //Calcula quantos bits faltam para inteirar 8 bits

        //Em seguida estamos acrescentando os zeros a esquerda, para manter os 8 bits na saída
        if(count==1){
            bin3 = "0"+bin3;
        }
        else if(count==2){
            bin3 = "00"+bin3;
        }
        else if(count==3){
            bin3 = "000"+bin3;
        }
        else if(count==4){
            bin3 = "0000"+bin3;
        }
        else if(count==5){
            bin3 = "00000"+bin3;
        }
        else if(count==6){
            bin3 = "000000"+bin3;
        }
        else if(count==7){
            bin3 = "0000000"+bin3;
        }
        else if(count==8){
            bin3 = "00000000"+bin3;
        }
        
        var dec4 = parseInt(num4)
        var bin4 = dec4.toString(2)
        var count = Object.keys(bin4).length; //Conta a quantidade de bits
        count=8-count //Calcula quantos bits faltam para inteirar 8 bits

        //Em seguida estamos acrescentando os zeros a esquerda, para manter os 8 bits na saída
        if(count==1){
            bin4 = "0"+bin4;
        }
        else if(count==2){
            bin4 = "00"+bin4;
        }
        else if(count==3){
            bin4 = "000"+bin4;
        }
        else if(count==4){
            bin4 = "0000"+bin4;
        }
        else if(count==5){
            bin4 = "00000"+bin4;
        }
        else if(count==6){
            bin4 = "000000"+bin4;
        }
        else if(count==7){
            bin4 = "0000000"+bin4;
        }
        else if(count==8){
            bin4 = "00000000"+bin4;
        }
        
        /* Identifar a classe, endereço de rede, máscara, brodcast, primeiro endereço, ultimo endereço,
        e os valores binários correspondentes de cada um */
        if(num1>=1 && num1<=127){ //Se for da classe A
            tbl.style.display="block"
            classe="A"
            end_rede = num1+".0.0.0"   
            mascara = "255.0.0.0"
            brodcast = num1+".255.255.255"
            prim_end = num1+".0.0.1"
            ult_end = num1+".255.255.254"
            binario_end_rede = bin1+".00000000.00000000.00000000"
            binario_mascara="11111111.00000000.00000000.00000000"
            binario_brodcast = bin1+".11111111.11111111.11111111"
            binario_prim_end = bin1+".00000000.00000000.00000001"
            binario_ult_end = bin1+".11111111.11111111.11111110"
        }
        else if(num1>=128 && num1<=191){ //Se for da classe B
            tbl.style.display="block"
            classe="B"
            end_rede = num1+"."+num2+".0.0"
            mascara = "255.255.0.0"
            brodcast = num1+"."+num2+".255.255"
            prim_end = num1+"."+num2+".0.1"
            ult_end = num1+"."+num2+".255.254"
            binario_end_rede = bin1+"."+bin2+".00000000.00000000"
            binario_mascara="11111111.11111111.00000000.00000000" 
            binario_brodcast = bin1+"."+bin2+".11111111.11111111"
            binario_prim_end = bin1+"."+bin2+".00000000.00000001"
            binario_ult_end = bin1+"."+bin2+".11111111.11111110"   
        }
        else if(num1>=192 && num1<=223){ //Se for da classe C
            tbl.style.display="block"
            classe="C"
            end_rede = num1+"."+num2+"."+num3+".0"
            mascara = "255.255.255.0"
            brodcast = num1+"."+num2+"."+num3+".255"
            prim_end = num1+"."+num2+"."+num3+".1"
            ult_end = num1+"."+num2+"."+num3+".254"
            binario_end_rede = bin1+"."+bin2+"."+bin3+".00000000"
            binario_mascara="11111111.11111111.11111111.00000000"  
            binario_brodcast = bin1+"."+bin2+"."+bin3+".11111111"
            binario_prim_end = bin1+"."+bin2+"."+bin3+".00000001"
            binario_ult_end = bin1+"."+bin2+"."+bin3+".11111110"    
        }

        //Guardar valores para mostrar na tabela
        tblclasse.innerText = classe
        tblendereco.innerText = end_rede
        tblmascara.innerText = mascara
        tblbroadcast.innerText = brodcast
        tblpendereco.innerText = prim_end
        tbluendereco.innerText = ult_end
        tblbinendereco.innerText = binario_end_rede
        tblbinmascara.innerText = binario_mascara
        tblbinbroadcast.innerText = binario_brodcast
        tblbinpendereco.innerText = binario_prim_end
        tblbinuendereco.innerText = binario_ult_end
    }
}