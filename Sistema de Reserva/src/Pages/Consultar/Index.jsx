import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';
import logoFiat from '../../assets/imagens/logoFiat.png';

function Consultar() {
  const [carro, setCarro] = useState({
    carro_id: '',
    placa: '',
    modelo: '',
    url_foto: '',
    preco_aluguel_dia: '',
    ano: '',
    marca: ''
  });

  const cliente_id = localStorage.getItem('cliente_id');

  if(!cliente_id) {
    alert('Você precisa estar logado para conseguir consultar um carro. Vou te redirecionar para a página de login.');
    window.location.href = '/login';
  }

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        // Supondo que você tenha um endpoint que retorna um carro específico
        //o endpoint é http://localhost:3000/api/carro/pegarCarro/:id
        const response = await axios.get(`https://projeto-automovel.onrender.com/api/reserva/findReservasByCliente/${cliente_id}`);

        setCarro(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do carro:', error);
      }
    };

    fetchCarro();
  }, []);

  return (
    <div className='page-container2'>
      <div className='header'>
        <div className="logo">
          <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto' }} />
        </div>

        <div className="navigation">
          <a href="/home">Home</a>
          <a href="/consultar">Consultar reservas</a>

          <div className="dropdown">
            <button className="dropbtn">Perfil</button>

            <div className="dropdown-content">
              <a href="/Ajuda">Ajuda</a>
              <a href="/Login">Sair</a>
            </div>
          </div>
        </div>
      </div>
      <div className='dados-carro'>
        <div className='dados'>
          <h3>Dados da locação</h3>
        </div>

        <div className='forms-cons'>
          <label>Código do carro</label>
          <input className='input-name' name='cod' type='text' value={carro.carro_id} readOnly />
          <label>Placa</label>
          <input className='input-name' name='placa' type='text' value={carro.placa} readOnly />
          <label>Modelo</label>
          <input className='input-name' name='modelo' type='text' value={carro.modelo} readOnly />
          <label>Marca</label>
          <input className='input-name' name='marca' type='text' value={carro.marca} readOnly />
          <label>Ano</label>
          <input className='input-number' name='ano' type='number' value={carro.ano} readOnly />
          <label>Preço por Dia</label>
          <input className='input-number' name='preco' type='text' value={`R$ ${carro.preco_aluguel_dia}`} readOnly />
          <label>Foto</label>
          {carro.url_foto && <img src={carro.url_foto} alt='Carro' style={{ width: '200px', height: 'auto' }} />}
        </div>
      </div>
    </div>
  );
}

export default Consultar;
