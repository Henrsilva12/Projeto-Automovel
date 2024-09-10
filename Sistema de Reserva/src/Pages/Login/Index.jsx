import { useState } from 'react'
import './Style.css'
import EyeOpen from '../../assets/icons/EyeOpen'
import EyeOff from '../../assets/icons/EyeOff'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import CarroLogin from '../../assets/imagens/CarroLogin.png'
import { Link } from 'react-router-dom'

function Login() {

  /*Gerenciar o email e a senha */
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [viewPassword,setViewPassword] = useState(false)


  const HandleViewPassword = () => {
    setViewPassword(!viewPassword)
  }


  return (
//HTML

        <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={CarroLogin} alt='carroLogin' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>
                    <h1>Login</h1>
                    <p>Insira seu email/CPF e sua senha para iniciar!</p>

                <div className='Campo-email'>
                  <label>E-mail/CPF</label>
                  <input className='input-email' name='Email/CPF' type='text' value={email} onChange={(v)=>setEmail(v.target.value)} placeholder='Digite o email ou CPF'/> 
                </div>

              <div className='campo-senha'>
                  <label>Senha</label>
                <div className='container-password'>
                  <input className='input-password' name='Senha' type={viewPassword ? 'text':'password'} value={password} onChange={(v)=>setPassword(v.target.value)} placeholder='******'/>
                  <span style={{cursor:'pointer'}} onClick={ HandleViewPassword }>
                    {viewPassword ? (
                      <EyeOff/>
                    ):(
                      <EyeOpen/>
                    )}
                  </span>
                </div>
              </div>

                  <div className='toggle'>
                    <label>
                      <input type="checkbox" id='chk'/>
                      <label htmlFor="chk" className="switch">
                      <span className='slider'></span>
                      </label>
                    </label>
                    Mantenha conectado
                    <Link to={'/recover_password'}>Esqueceu a senha?</Link>
                  </div>

              
                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                    <Link to={'/home'}>
                     <button>Entrar</button>
                    </Link>
                  <div className='divider'>
                    <label>OU</label>
                </div>
                <Link to={'/register'}>
                  <button>Criar Conta</button>
                </Link>
              </div>
            </form>
        </div>
  )
}

export default Login
