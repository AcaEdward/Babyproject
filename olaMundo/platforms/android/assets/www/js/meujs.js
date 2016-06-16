function getIdade(){
    var v = document.getElementById("selec").value;
    switch(v){
        case "1":
            window.location.href = "html/umMes.html";
            break;
        case "2":
            doisMeses();
            break;
        case "3":
            tresMeses();
            break;
        case "4":
            quatroMeses();
            break;
        case "5":
            cincoMeses();
            break;
        case "6":
            seisMeses();
            break;
        default:
    }
}


function seteQuest(){
    
    var a = document.getElementById("resp1").value;
    var b = document.getElementById("resp2").value;
    var c = document.getElementById("resp3").value;
    
    var d = document.getElementById("resp4").value;
    var e = document.getElementById("resp5").value;
    var f = document.getElementById("resp6").value;
    var g = document.getElementById("resp7").value;
    
    
    var contador = 0;
    var erroHabDesen = 0;

    if(a == "sim")
        contador += 10;
    else
        erroHabDesen += 1;
    
    if(b == "sim")
        contador += 10;
    else
        erroHabDesen += 1;

    if(c == "sim")
        contador += 10;
    else
        erroHabDesen += 1;
    
    if(d == "sim")
        contador += 4;
    else
        contador += 0;

    if(e == "sim")
        contador += 4;
    else
        contador += 0;

    if(f == "sim")
        contador += 1;
    else
        contador += 0;

    if(g == "sim")
        contador += 1;
    else
        contador += 0;

    
    gerarResposta(contador,erroHabDesen);
}

function gerarResposta(resposta, erroHabDesen){

    var r1 = "<h1>Diagnostico:</h1>\nOps! O crescimento da criança é considerado INADEQUADO.";
    var r2 = "<h1>Diagnostico:</h1>\nQue bom! O crescimento da criança é considerado ADEQUADO.";
    var r3 = "<h1>Diagnostico:</h1>\nParabéns!!! O crescimento da criança é considerado MAIS que ADEQUADO.";
    var r4 = "<h1>Diagnostico:</h1>\nQue criança demais!!! O crescimento da criança é considerado MUITO MELHOR do que o esperado.";


    var procureMedico = "\n Procure um médico especialista para mais informações.";
    var erros = "\nA sua criança NÃO POSSUI " + erroHabDesen + " habilidade(s) que ja é/são devesenvolvida(s) em crianças de mesma idade.";
    var erros2 = "\nMas a sua criança NÃO POSSUI " + erroHabDesen + " habilidade(s) que ja é/são devesenvolvida(s) em crianças de mesma idade.";


    var voltar = "<input";
    if(resposta < 30){
        if(erroHabDesen > 0)
            document.getElementById("res").innerHTML= r1 + erros + procureMedico;
        else
            document.getElementById("res").innerHTML= r1 + procureMedico;
    } else if(resposta  >= 30 && resposta < 34){
        if(erroHabDesen > 0)
            document.getElementById("res").innerHTML= r2 + erros2 + procureMedico;
        else
            document.getElementById("res").innerHTML= r2 + procureMedico;
    } else if(resposta >= 34 && resposta <=38){
            document.getElementById("res").innerHTML= r3 + procureMedico;
    } else{
            document.getElementById("res").innerHTML= r4 + procureMedico;
    }
}