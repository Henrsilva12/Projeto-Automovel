import React from 'react'
import { useState } from 'react'
import './Style.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroNova from '../../assets/imagens/carroNova.png'
import { Link } from 'react-router-dom'

const RecoverPassword = () => {
  const [email,setEmail] = useState('')
  return (
    <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={carroNova} alt='carroNova' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>
                <div className='container-Recup'>
                    <label>Recuperar Senha</label>
                    <p2>Insira um email válido!</p2>
                </div>

                <div className='Campo-email'>
                  <label>E-mail</label>
                  <input className='input-email' name='Email' type='text3' value={email} onChange={(v)=>setEmail(v.target.value)} placeholder='Digite o email'/> 
                </div>

                <div style={{ padding: '5px 10px', fontSize: '17px', textAlign: 'center' }}>
                <Link to={'/'}>
                  <button>Enviar</button>
                </Link>
              </div>
            </form>
        </div>
  )     
}

export default RecoverPassword
