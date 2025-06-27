const instanceId = "3E35940B51C1C013896CD24EFB273D33";
const instanceToken = "EBD857C4A382BEE196399FA6";

function enviarMensagem() {
  const numero = document.getElementById("numero").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const tituloBotao = document.getElementById("tituloBotao").value.trim();
  const linkBotao = document.getElementById("linkBotao").value.trim();
  const log = document.getElementById("log");

  if (!numero || !mensagem || !tituloBotao || !linkBotao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const payload = {
    phone: numero,
    message: mensagem,
    footer: "Unlock Apple",
    buttonActions: [
      {
        id: "1",
        type: "URL",
        url: linkBotao,
        label: tituloBotao
      }
    ]
  };

  fetch(`https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/send-button-actions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Token": instanceToken
    },
    body: JSON.stringify(payload),
    mode: 'cors',
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => {
    log.innerText = "✅ Mensagem enviada com sucesso:\n" + JSON.stringify(data, null, 2);
  })
  .catch(error => {
    log.innerText = "❌ Erro ao enviar: " + error.message;
  });
}


