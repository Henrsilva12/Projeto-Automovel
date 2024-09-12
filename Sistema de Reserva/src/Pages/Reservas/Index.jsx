
import React from "react";
import { useEffect, useState, useRef } from "react";
import "./Style.css";
import logoFiat from "../../assets/imagens/logoFiat.png";
import { Link } from "react-router-dom";


function Reservas() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/carro/pegarDisponiveis")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const recarregarPagina = () => {
    window.location.reload();
  };

  const getClienteIdFromLocalStorage = () => {
    return localStorage.getItem("cliente_id");
  };

  const alugarCarro = async (carro) => {
    const dataReserva = document.getElementById("data-reserva").value;
    const horarioReserva = document.getElementById("horario-reserva").value;
    const dataFinal = document.getElementById("data-final").value;
    const horarioFinal = document.getElementById("horario-final").value;

    if (!dataReserva || !horarioReserva || !dataFinal || !horarioFinal) {
      alert("Por favor, preencha todas as datas e horários.");
      return;
    }

    const cliente_id = getClienteIdFromLocalStorage();

    const dataReservation = new Date(dataReserva);
    const dataDevolution = new Date(dataFinal);

    const diferenca = dataDevolution.getTime() - dataReservation.getTime();
    const totalDias = Math.ceil(diferenca / (1000 * 3600 * 24));
    const precoTotal = carro.preco_aluguel_dia * totalDias;

    await fetch("http://localhost:3000/api/reserva/makeReservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservaData: {
          carro_id: carro.carro_id,
          retirada: dataReservation,
          devolucao: dataDevolution,
          impostos: 0,
          custo: precoTotal,
          cliente_id: cliente_id,
        },
      }),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        alert("Reserva efetuada com sucesso");

        recarregarPagina();
      } else {
        alert("Erro ao efetuar reserva");
      }
    });
  };

  if (!data || !data.length) return null;

  return (
    <div className="div-mae">
      <div className="car-rental-container">
        <div className="page-container">
          <div className="header">
            <div className="logo">
              <img
                src={logoFiat}
                alt="Logo"
                style={{ width: "80px", height: "auto" }}
              />
            </div>
            <div className="navigation">
              <a href="/home">Home</a>
              <a href="/reservar">Minhas reservas</a>
              <div className="dropdown">
                <button className="dropbtn">Perfil</button>

                <div className="dropdown-content">
                  <a href="/Login">Sair</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Reserve um carro</h2>

        <div className="search-section">
          <label>Data de Retirada:</label>
          <input type="date" className="input-field" id="data-reserva" />

          <label>Horário de Retirada:</label>
          <input type="time" className="input-field" id="horario-reserva" />

          <label>Data de Devolução:</label>
          <input type="date" className="input-field" id="data-final" />

          <label>Horário de Devolução:</label>
          <input type="time" className="input-field" id="horario-final" />
        </div>

        <h2>Carros disponíveis</h2>
        <div className="container-car">
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { carro_id, modelo, preco_aluguel_dia, url_foto } = item;
              return (
                <div className="item" key={carro_id}>
                  <div className="image">
                    <img src={url_foto} alt={modelo} />
                  </div>
                  <div className="info">
                    <span className="name">{modelo}</span>
                    <span className="price">R$ {preco_aluguel_dia}</span>
                    <button className="bC" onClick={() => alugarCarro(item)}>
                      Alugar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="buttons1">
          <button onClick={handleLeftClick}>
            <img src="/src/assets/icons/Passar.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/src/assets/icons/Passar.png" alt="Scroll Right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservas;
