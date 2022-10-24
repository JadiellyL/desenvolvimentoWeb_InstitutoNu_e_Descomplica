

function getValue(){
    let valor = document.getElementById("name").value;
    document.getElementById("result").innerHTML = "Bem vindo(a)," + valor;
}

function removeValue(){
    document.getElementById("name").value = "";
    document.getElementById("result").innerHTML = "";
}
