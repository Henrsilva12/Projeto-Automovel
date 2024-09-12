import React from "react";
import { useState } from "react";
import "./Style.css";
import logoFiat from "../../assets/imagens/logoFiat.png";
import nomeLogo from "../../assets/imagens/nomeLogo.png";
import carroNova from "../../assets/imagens/carroNova.png";
import axios from "axios";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const apiurl = "http://localhost:3000/api/cliente/passwordRecovery";

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiurl, {
        email: email,
      });
      
      if (response.status === 200 ) {
        alert("Email enviado com sucesso!");
        window.location.href = "/login";
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container-carro">
        <div style={{ alignItems: "center" }}>
          <img
            src={carroNova}
            alt="carroNova"
            style={{ width: "872px", height: "875px" }}
          />
        </div>
      </div>

      <form onSubmit={sendEmail}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logoFiat}
            alt="Logo"
            style={{ width: "80px", height: "auto" }}
          />
          <img
            src={nomeLogo}
            alt="nomeLogo"
            style={{ width: "80px", height: "auto" }}
          />
        </div>
        <div className="container-Recup">
          <label>Recuperar Senha</label>
          <p2>Insira um email válido!</p2>
        </div>

        <div className="Campo-email">
          <label>E-mail</label>
          <input
            className="input-email"
            name="Email"
            type="text3"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            placeholder="Digite o email"
          />
        </div>

        <div
          style={{ padding: "5px 10px", fontSize: "17px", textAlign: "center" }}
        >
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
