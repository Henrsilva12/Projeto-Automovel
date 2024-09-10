import { useState } from 'react'
import './Style.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroCadastro2 from '../../assets/imagens/carroCadastro2.png'
import { Link } from 'react-router-dom'

function Cadastro2() {

    const [cep,setCep] = useState('')
    const [estado,setEstado] = useState('')
    const [cidade,setCidade] = useState('')
    const [ender,setEnder] = useState('')
    const [numero3,setNumero3] = useState('')
    const [bairro,setBairro] = useState('')
    const [complemento,setComplemento] = useState('')
    
  return (
    
//HTML
        <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={carroCadastro2} alt='carroCadastro2' style={{ width: '872px', height: '875px'}} />
            </div>
          </div>

            <form>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <img src={logoFiat} alt='Logo' style={{ width: '80px', height: 'auto'}} />
                <img src={nomeLogo} alt='nomeLogo' style={{ width: '80px', height: 'auto'}} />
              </div>

                <div className='container-conta'>
                    <label>Crie uma Conta</label>
                    <p>Preencha as informações corretamente!</p>
                </div>

                <div className='forms2'>
                  <label>CEP</label>
                  <input className='input-name' name='cep' type='text3' value={cep} onChange={(v)=>setCep(v.target.value)}/> 
                  <label>Estado</label>
                  <input className='input-name' name='estado' type='text3' value={estado} onChange={(v2)=>setEstado(v2.target.value)}/> 
                  <label>Cidade</label>
                  <input className='input-name' name='cidade' type='text3' value={cidade} onChange={(v3)=>setCidade(v3.target.value)}/> 
                  <label>Endereço</label>
                  <input className='input-name' name='ender' type='text3' value={ender} onChange={(v4)=>setEnder(v4.target.value)}/>
                  <label>Número</label>
                  <input className='input-name' name='numero' type='numero3' value={numero3} onChange={(v5)=>setNumero3(v5.target.value)}/> 
                  <label>Bairro</label>
                  <input className='input-name' name='bairro' type='text3' value={bairro} onChange={(v6)=>setBairro(v6.target.value)}/> 
                  <label>Complemento</label>
                  <input className='input-name' name='complemento' type='text3' value={complemento} onChange={(v7)=>setComplemento(v7.target.value)}/> 

                   
                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                    <Link to={'/register3'}>
                     <button>Próximo</button>
                    </Link>
              </div>
              </div>
            </form>
        </div>
  )
}

export default Cadastro2