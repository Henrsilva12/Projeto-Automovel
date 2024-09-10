import { useState } from 'react'
import './Style.css'
import EyeOpen from '../../assets/icons/EyeOpen'
import EyeOff from '../../assets/icons/EyeOff'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroNova from '../../assets/Imagens/carroNova.png'
import { Link } from 'react-router-dom'


function NovaSenha() {

  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [viewPassword,setViewPassword] = useState(false)
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false)


  const HandleViewPassword = () => {
    setViewPassword(!viewPassword)
  }

  const HandleViewConfirmPassword = () => {
    setViewConfirmPassword(!viewConfirmPassword)
  }


  return (
//HTML

        <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={carroNova} alt='carroLogin' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>

                  <div className='container-NovaSenha'>
                    <label>Nova Senha</label>
                    <p>Siga as instruções do check-list para ter uma senha segura!</p>
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

              <div className='campoConf'>
                  <label>Confirme sua senha</label>
                <div className='container-password'>
                  <input className='input-password' name='ConfirmPassword' type={viewConfirmPassword ? 'text':'password'} value={confirmPassword} onChange={(v2)=>setConfirmPassword(v2.target.value)} placeholder='******'/>
                  <span style={{cursor:'pointer'}} onClick={ HandleViewConfirmPassword }>
                    {viewConfirmPassword ? (
                      <EyeOff/>
                    ):(
                      <EyeOpen/>
                    )}
                  </span>
                </div>
              </div>

                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                  <Link to={'/Login'}>
                    <button type='button'>Confirmar</button>
                  </Link>

                </div>
            </form>
        </div>
  )
}

export default NovaSenha

