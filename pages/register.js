import styles from "../styles/register.module.css";
import {useState} from "react"
import { register } from "../client/request";
import { useRouter } from "next/router";
import Link from "next/link"

const Register = (props) => {
   
  const[name , setName] = useState("")
  const[surname , setSurname] = useState("")
  const[email , setEmail] = useState("")
  const[password , setpassword] = useState("")
  const[errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const registerHandler = async (e) => {
    e.preventDefault()
    const payload = {name , surname , email,  password }
    const result = await register(payload)
  
    if(result.hasError){
      setErrorMessage(result.errorMessage)
    }else{
      setErrorMessage(null);
      setName("")
      setSurname("")
      setEmail("")
      setpassword("")
      router.replace(`/signin`)
    }
  
  }
  
  return (
    <div className={styles.Container}>
      <form onSubmit={registerHandler}>
        <div className={styles.Wrapper}>
        <Link href={`/`}>
           <span className={styles.close}>
            X         
          </span>
         </Link>
          <h1 className={styles.title}>Register</h1>
          <span>Already have an Account? <Link href={`/signin`} className={styles.link}>Sign in Here</Link></span>
          {
            errorMessage && (<p style={{textTransform: "capitalize", color: "red"}}>{errorMessage}</p>)
          }

          
          <label className={styles.label}>Name</label>
          <input className={styles.input} placeholder="Name" type="text" value={name} minlength={"3"} onChange={e => setName(e.target.value)} />
          
          <label className={styles.label}>Surname</label>
          <input className={styles.input} placeholder="Surname" type="text" value={surname} minlength={"3"} onChange={e => setSurname(e.target.value)} />
          
          <label className={styles.label}>Email</label>
          <input className={styles.input} placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          
          <label className={styles.label}>Password</label>
          <input className={styles.input} placeholder="Password" type="password" value={password} minlength={"8"} onChange={e => setpassword(e.target.value)} />
          <button className={styles.button}>Sign up</button>

          <p className={styles.copy}>&copy; 2010-2023</p>
        </div>
      </form>
    </div>
  );
};

export default Register;
