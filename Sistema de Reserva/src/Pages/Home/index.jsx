import React from 'react'
import './Style.css'
import telaHome from '../../assets/imagens/telaHome.png'
import logoFiat from '../../assets/imagens/logoFiat.png'


function Home() {

  return (


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

      {/* Contêiner para o fundo da página */}
      <div 
        className="background-image" 
        style={{ 
          backgroundImage: `url(${telaHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
    </div>
  );
}


export default Home
