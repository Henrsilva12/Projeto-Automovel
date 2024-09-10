import { useState } from 'react'
import './Style.css'
import EyeOpen from '../../assets/icons/EyeOpen'
import EyeOff from '../../assets/icons/EyeOff'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroSenha from '../../assets/imagens/carroSenha.png'
import { Link } from 'react-router-dom'

function Cadastro3() {
 
    const [password2,setPassword2] = useState('')
    const [confirmPassword2, setConfirmPassword2] = useState('')
    const [viewPassword2,setViewPassword2] = useState(false)
    const [viewConfirmPassword2, setViewConfirmPassword2] = useState(false)


    const HandleViewPassword2 = () => {
      setViewPassword2(!viewPassword2)
    }

    const HandleViewConfirmPassword2 = () => {
      setViewConfirmPassword2(!viewConfirmPassword2)
    }

    
  return (
    
//HTML
        <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={carroSenha} alt='carroSenha' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>

                <div className='container-conta'>
                    <label>Crie uma Conta</label>
                    <p>Insira uma senha para ter acesso ao sistema!</p>
                </div>

                <div className='forms3'>
                  <label>Senha</label>
                <div className='container-password'>
                  <input className='input-password' name='Senha' type={viewPassword2 ? 'text':'password'} value={password2} onChange={(v3)=>setPassword2(v3.target.value)} placeholder='******'/>
                  <span style={{cursor:'pointer'}} onClick={ HandleViewPassword2 }>
                    {viewPassword2 ? (
                      <EyeOff/>
                    ):(
                      <EyeOpen/>
                    )}
                  </span>
                </div>
              </div>

              <div className='confirmar'>
                  <label>Confirme sua senha</label>
                <div className='container-password'>
                  <input className='input-password' name='ConfirmPassword' type={viewConfirmPassword2 ? 'text':'password'} value={confirmPassword2} onChange={(v4)=>setConfirmPassword2(v4.target.value)} placeholder='******'/>
                  <span style={{cursor:'pointer'}} onClick={ HandleViewConfirmPassword2 }>
                    {viewConfirmPassword2 ? (
                      <EyeOff/>
                    ):(
                      <EyeOpen/>
                    )}
                  </span>
                </div>
              </div>
                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                    <Link to={'/Login'}>
                     <button>Salvar</button>
                    </Link>
              </div>
            </form>
        </div>
  )
}

export default Cadastro3