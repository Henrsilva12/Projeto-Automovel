import { useState } from 'react'
import './Style.css'
import logoFiat from '../../assets/imagens/logoFiat.png'
import nomeLogo from '../../assets/imagens/nomeLogo.png'
import carroCriar from '../../assets/imagens/carroCriar.png'
import { Link } from 'react-router-dom'

function Cadastro() {

    const [email2,setEmail] = useState('')
    const [date,setDate] = useState('')
    const [name2,setName2] = useState('')
    const [number2,setNumber2] = useState('')
    const [cnh,setCnh] = useState('')
    const [cpf,setCpf] = useState('')
    const [sexo,setSexo] = useState('')
    
    const HandleChange = (event) => {
      setSexo(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Sexo selecionado: ${sexo}`)
    }
  return (
    
//HTML
        <div className='container'>

          <div className='container-carro'>
            <div style={{ alignItems: 'center' }}>
            <img src={carroCriar} alt='carroCriar' style={{ width: '872px', height: '875px'}} />
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

                <div className='forms'>
                  <label>Nome Completo</label>
                  <input className='input-name' name='name2' type='text2' value={name2} onChange={(v)=>setName2(v.target.value)}/> 
                  <label>Data de Nascimento</label>
                  <input className='input-date' name='date' type='date' value={date} onChange={(v2)=>setDate(v2.target.value)}/> 
                  <label>E-mail</label>
                  <input className='input-email2' name='email2' type='email2' value={email2} onChange={(v3)=>setEmail(v3.target.value)}/> 
                  <label>Celular</label>
                  <input className='input-number' name='number2' type='number2' value={number2} onChange={(v4)=>setNumber2(v4.target.value)}/>
                  <label>CNH</label>
                  <input className='input-cnh' name='cnh' type='number2' value={cnh} onChange={(v5)=>setCnh(v5.target.value)}/> 
                  <label>CPF</label>
                  <input className='input-cpf' name='cpf' type='text2' value={cpf} onChange={(v6)=>setCpf(v6.target.value)}/> 
                  <label>Sexo</label>
                  
                   <div onChange={handleSubmit}></div>
                      <label>Masculino <input type="radio" value="Masculino" checked={sexo === 'Masculino'} onChange={HandleChange}/></label>
                      <label>Feminino <input type="radio" value="Feminino" checked={sexo === 'Feminino' } onChange={HandleChange}/></label>
                </div>
                <div style={{ padding: '5px 10px', fontSize: '18px', textAlign: 'center' }}>
                    <Link to={'/register2'}>
                     <button>Próximo</button>
                    </Link>
              </div>
            </form>
        </div>
  )
}

export default Cadastro
