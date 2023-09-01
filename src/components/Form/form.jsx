

import { useState } from 'react'
import styles from './styles.module.scss'

export default function Form(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')

  async function handleSubmit(event){
    event.preventDefault()

    const data = {
      firstName,
      lastName,
      number,
      email,
      password,
      gender
    }
    console.log(data)
    resetInfos()
  }

  const onOptionChange = e => {
    setGender(e.target.value)
  }

  const resetInfos = () =>{
    setFirstName('')
    setLastName('')
    setNumber(null)
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setGender('')
  }
 
  
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const cleanedPhoneNumber = inputPhoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedPhoneNumber = formatPhoneNumber(cleanedPhoneNumber);
    setNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length <= 2) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    } else {
      return `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 4)}) ${phoneNumber.slice(4, 9)}-${phoneNumber.slice(9, 13)}`;
    }
  };
  return(
    <div className={styles.container}>
      <div className={styles.formImage}>
        <img src="assets/undraw_shopping_re_hdd9.svg" alt="" />
      </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <div className={styles.title}><h1>Cadastre-se</h1>
            </div>
              <div className={styles.loginButton}>
                <button><a href="">Entrar</a></button>
              </div>
          </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="firstname">Seu nome</label>
                    <input
                      id="firstname"
                      type="text"
                      value={firstName}
                      placeholder="Digite seu nome"
                      required
                      onChange={event => setFirstName(event.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="lastname">Sobrenome</label>
                    <input
                      id="lastname"
                      type="text"
                      value={lastName}
                      placeholder="Digite seu sobrenome"
                      required
                      onChange={event => setLastName(event.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      placeholder="Digite seu email"
                      required
                      onChange={event => setEmail(event.target.value)}
                    />
                </div>
              <div className={styles.inputBox}>
                <label htmlFor="number">Celular</label>
                  <input
                    id="number"
                    type="tel"
                    value={number}
                    placeholder="(xx) xxxxx-xxxx"
                    required
                    onChange={handlePhoneNumberChange}
                   />
                </div>
             <div className={styles.inputBox}>
               <label htmlFor="password">Sua senha</label>
                <input
                  id="password"
                  type="password"
                 value={password}
                  placeholder="Digite sua senha"
                  required
                  onChange={event => setPassword(event.target.value)}
                />
              </div>
             <div className={styles.inputBox}>
                <label htmlFor="confirmpassword">Sua senha novamente</label>
                <input
                  id="confirmpassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Digite sua senha novamente"
                  required
                  onChange={event => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>
            <div className={styles.genderInputs}>
              <div className={styles.genderTitle}>
                <h6>Gênero</h6>
              </div>
              <div className={styles.genderGroup}>
                <div className={styles.genderInput}>
                  <input 
                  type="radio" 
                  id="female" 
                  name="gender" 
                  value="female" 
                  checked={gender === "female"}
                  onChange={onOptionChange}
                  />
                  <label htmlFor="female">Feminino</label>
                </div>
                <div className={styles.genderInput}>
                <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="male" 
                checked={gender === "male"}
                onChange={onOptionChange}
                />
                  <label htmlFor="male">Masculino</label>
                  </div>
                <div className={styles.genderInput}>
                    <input 
                    type="radio" 
                    id="elu" 
                    name="gender" 
                    value="elu" 
                    checked={gender === "elu"}
                    onChange={onOptionChange}
                    />
                    <label htmlFor="others">Elu/delixs</label>
                  </div>
                  <div className={styles.genderInput}>
                    <input 
                    type="radio" 
                    id="none" 
                    name="gender" 
                    value="none" 
                    checked={gender === "none"}
                    onChange={onOptionChange}
                    />
                    <label htmlFor="none">Prefiro não dizer</label>

                  </div>
                </div>
              </div>
              <div 
              className={styles.continueButton}
              >
                <button>
                  <a 
                  href=""
                  >Continuar
                  </a>
                </button>
              </div>
        </form>
      </div>
    </div>
  )
}