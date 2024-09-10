import { useState } from 'react'
import './StyleNova.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroNova from '../../assets/Imagens/carroNova.png'


function Nova() {

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
            <img src={carroNova} alt='carroLogin' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>
                    <h1>Nova Senha</h1>
                    <p>Siga as instruções do check-list para ter uma senha segura!</p>

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

              <div className='campo-confirmacao-senha'>
                  <label>Confirme sua senha</label>
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

                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                <button type='button'>Confirmar</button>
                </div>
            </form>
        </div>
  )
}

export default Nova

