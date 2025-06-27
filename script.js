<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Enviar Mensagem WhatsApp - Unlock Apple</title>
</head>
<body>
  <h2>Enviar Mensagem com Botão Link - Unlock Apple</h2>

  <label for="mensagem">Mensagem:</label><br />
  <textarea id="mensagem" rows="4" cols="50" placeholder="Digite a mensagem"></textarea><br /><br />

  <label for="tituloBotao">Título do Botão:</label><br />
  <input type="text" id="tituloBotao" placeholder="Ex: Acessar Site" /><br /><br />

  <label for="linkBotao">Link do Botão:</label><br />
  <input type="text" id="linkBotao" placeholder="https://exemplo.com" /><br /><br />

  <button onclick="enviarMensagem()">Enviar Mensagem</button>

  <pre id="log" style="background:#eee; padding:10px; margin-top:20px;"></pre>

  <script>
    const instanceId = "3E35940B51C1C013896CD24EFB273D33";
    const instanceToken = "EBD857C4A382BEE196399FA6";
    const numero = "5541995810993"; // atualizado para número conectado

    function enviarMensagem() {
      const mensagem = document.getElementById("mensagem").value;
      const tituloBotao = document.getElementById("tituloBotao").value;
      const linkBotao = document.getElementById("linkBotao").value;
      const log = document.getElementById("log");

      if (!mensagem || !tituloBotao || !linkBotao) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const payload = {
        phone: numero,
        message: mensagem,
        footer: "Unlock Apple",
        buttons: [
          {
            url: linkBotao,
            text: tituloBotao
          }
        ]
      };

      fetch(`https://api.z-api.io/instances/${instanceId}/token/${instanceToken}/send-link-button-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        log.innerText = "✅ Mensagem enviada com sucesso:\n" + JSON.stringify(data, null, 2);
      })
      .catch(error => {
        log.innerText = "❌ Erro ao enviar: " + error.message;
      });
    }
  </script>
</body>
</html>
