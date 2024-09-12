import React from 'react'
import { useState } from 'react'
import './Style.css'
import logoFiat from '../../assets/imagens/logoFiat.png'


function Consultar() {

  const [cod, setCod] = useState('')
  const [placa, setPlaca] = useState('')
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState('')

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
          <input className='input-name' name='cod' type='text4' value={cod} onChange={(v6) => setCod(v6.target.value)} />
          <label>Placa</label>
          <input className='input-name' name='placa' type='text4' value={placa} onChange={(v7) => setPlaca(v7.target.value)} />
          <label>Modelo</label>
          <input className='input-name' name='modelo' type='text4' value={modelo} onChange={(v8) => setModelo(v8.target.value)} />
          <label>Marca</label>
          <input className='input-name' name='marca' type='text4' value={marca} onChange={(v9) => setMarca(v9.target.value)} />
          <label>Ano</label>
          <input className='input-number' name='ano' type='numero4' value={ano} onChange={(v10) => setAno(v10.target.value)} />
        </div>
      </div>

    </div>

  );
}


export default Consultar
