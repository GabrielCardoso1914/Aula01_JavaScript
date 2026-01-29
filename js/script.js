function alteraTexto(){
    const texto = document.getElementById("texto")
    texto.textContent = "Texto Alterado com Sucesso!";
}
function calcular(){
    const valor1 = parseFloat(document.getElementById("vl1").value);
    const valor2 = parseFloat(document.getElementById("vl2").value);
    let soma = parseInt(valor1) + parseInt(valor2);
    alert(soma);
}
function usuarioEntra(){
    const usuario = document.getElementById("text1").value;
    alert("Bem vindo " + usuario + "!");
}
function calcularMedia(){
 const valor3 = parseFloat(document.getElementById("vl3").value);
    const valor4 = parseFloat(document.getElementById("vl4").value);
    let soma = parseInt(valor3) + parseInt(valor4);
    let media = (soma / 2);
    alert(media);
}
function calcularDollar(){
 const valor5 = parseFloat(document.getElementById("vl5").value);
    let euro = (valor5 / 5.50);
    alert(euro.toFixed(2) + "$");
}
function calcularAreaTriangulo(){
    const valor6 =  parseFloat(document.getElementById("vl6").value);
    const valor7 =  parseFloat(document.getElementById("vl7").value);
    let multi = parseInt(valor6) * parseInt(valor7);
    let area = (multi /2);
    alert(area);
}
function calcularIdade(){
    const valor8 =  parseFloat(document.getElementById("vl8").value);
    let idade = 2025 - parseInt(valor8);
    alert(idade + " anos");
}