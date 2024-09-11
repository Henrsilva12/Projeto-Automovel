import React from 'react'
import {useEffect, useState, useRef} from 'react'
import './Style.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import { Link } from 'react-router-dom'

function Reservas() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

    useEffect(() => {
      fetch('http://localhost:5173/src/shoes.json')
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

    if(!data || !data.length) return null;

  return (
    
    <div className='div-mae'>
                <div className="car-rental-container">
        <div className='page-container'>
          <div className='header'>
            <div className="logo">
              <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
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
                <label1>Reserve um carro</label1>
               
                <div className="search-section">
                  
                  <input
                    type="text" placeholder="Digite o local de retirada"
                    className="input-field"
                  />
                  <input type="date" className="input-field" />
                  <input type="time" className="input-field" />
                  <input type="date" className="input-field" />
                  <input type="time" className="input-field" />
                  <button className="search-button">Buscar</button>
                </div>

                <label1>Carros disponíveis</label1>
               <div className='container-car'>
                <div className='carousel' ref={carousel}>
                  {data.map((item) => {
                    const { id, name, price, image } = item;
                   return (
                      <div className="item" key={id}>
                        <div className='image'>
                         <img src={image} alt={name} />
                       </div>
                        <div className='info'>
                         <span className='name'>{name}</span>
                         <span className='price'>R$ {price}</span>
                        <button className='bC'>Alugar</button>
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

export default Reservas
