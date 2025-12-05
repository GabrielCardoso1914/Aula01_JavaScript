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