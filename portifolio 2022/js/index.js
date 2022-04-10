var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log("altura: " + altura);
console.log("largura: " + largura);

if(largura <= 770){
    document.getElementById("tecnico").src="./img/tecnico2.png";
   document.getElementById("matematica").src="./img/matematica2.png";
}
