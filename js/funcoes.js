function AlertaCadastro(){
    alert("Cadastro Efetuado com sucesso! Voltando");
}

function DesabilitaDiv(boo){
const elemento = document.getElementById("RegistroSucesso");
if (boo ===""){
    boo = false;
}
 return elemento = boo;

}

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// Cria um array de pontos de neve
let pontos = [];
for (let i = 0; i < 100; i++) {
  pontos.push({
    x: Math.random() * canvas.width,
    y: 0,
  });
}

// Atualiza a posição da neve
function atualizar() {
  for (let i = 0; i < pontos.length; i++) {
    pontos[i].y += 10;

    // Se a neve sair da tela, recria ela
    if (pontos[i].y > canvas.height) {
      pontos[i].x = Math.random() * canvas.width;
      pontos[i].y = 0;
    }
  }

  // Desenha a neve
  ctx.fillStyle = "white";
  for (let i = 0; i < pontos.length; i++) {
    ctx.beginPath();
    ctx.arc(pontos[i].x, pontos[i].y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Chama novamente a função a cada 10 milissegundos
  requestAnimationFrame(atualizar);
}

atualizar();


