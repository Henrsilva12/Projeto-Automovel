import { useState, useEffect } from 'react'
import './Style.css'
import EyeOpen from '../../assets/icons/EyeOpen'
import EyeOff from '../../assets/icons/EyeOff'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import CarroLogin from '../../assets/imagens/CarroLogin.png'

function Login() {

  /*Gerenciar o email e a senha */
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [viewPassword,setViewPassoword] = useState(false)


  const HandleViewPassword = () => {
    setViewPassoword(!viewPassword)
  }

  return (
//HTML
        <div className='container'>
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
            <img src={logoFiat} alt='Logo' style={{ width: '100px', height: 'auto'}} />
            <img src={nomeLogo} alt='nomeLogo' style={{ width: '100px', height: 'auto'}} />
          </div>

          <div className='container-carro'>
            <div style={{ alignItems: 'center'}}>
            <img src={CarroLogin} alt='carroLogin' style={{ width: '100%', height: '400px'}} />
            </div>
          </div>

            <form>
              <h1>Login</h1>
              <h2>Insira seu email/CPF e sua senha para iniciar!</h2>
              <h3>Email/CPF</h3>
              <input className='input-email' name='Email/CPF' type='text' value={email} onChange={(v)=>setEmail(v.target.value)} placeholder='Digite o email ou CPF'/>
              <h4>Senha</h4>

                <div className='container-password'>
                  <input className='input-password' name='Senha' type={viewPassword ? 'text':'password'} value={password} onChange={(v)=>setPassword(v.target.value)} placeholder='*******'/>
                  <span style={{cursor:'pointer'}} onClick={ HandleViewPassword }>
                    {viewPassword ? (
                      <EyeOff/>
                    ):(
                      <EyeOpen/>
                    )}
                  </span>
                </div>

                <div className='container-esq'>
                  <div className='toggle'>
                    <input type="checkbox" id='chk'/>
                        <label htmlFor="chk" className="switch">
                    <span className='slider'></span>
                        </label>
                  </div>

                  <h6>Manter conectado</h6>
                  <h7>Esqueceu sua senha?</h7>
                </div>

              <button type='button'>Entrar</button>
                <div className='divider'>
                  <h5>OU</h5>
                </div>

              <button>Criar Conta</button>
            </form>
        </div>
  )
}

export default Login
