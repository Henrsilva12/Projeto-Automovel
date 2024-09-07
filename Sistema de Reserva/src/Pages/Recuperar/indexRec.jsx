import { useState, useEffect } from 'react'
import './styleRec.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'

function Recuperar() {

  /*Recuperar Senha*/
  const [email,setEmail] = useState('')

  return (
//HTML
        <div className='container'>
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
            <img src={logoFiat} alt='Logo' style={{ width: '100px', height: 'auto'}} />
            <img src={nomeLogo} alt='nomeLogo' style={{ width: '100px', height: 'auto'}} />
          </div>
            <form>
              <h1>Recuperar Senha</h1>
              <h2>Insira um email válido!</h2>
              <h3>E-mail</h3>
              <input className='input-email' name='Email/CPF' type='text' value={email} onChange={(v)=>setEmail(v.target.value)} placeholder='Digite o email'/>
              <button type='button'>Enviar</button>
            </form>
        </div>
  )
}

export default Recuperar
