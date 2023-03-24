import { useState } from "react"; 
import Link from "next/link"
import styles from "../styles/signin.module.css"
import {signIn} from "next-auth/react"
import { useRouter } from "next/router";

const Signin = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useRouter()

  
  const signinHandler = async (e) => {
    e.preventDefault();

      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if(!data.error){
        router.replace(`/`)
      }else{
        setErrorMessage(data.error)
      }
  };

    return (
      <div className={styles.Container}>
       <form onSubmit={signinHandler}>
         <div className={styles.Wrapper}>
         <Link href={`/`}>
            <span className={styles.close}>
            X         
          </span>
         </Link>
      
          <h1 className={styles.title}>Sign in</h1>
          <span>New Customer? <Link href={`/register`} className={styles.link}>Register Here</Link></span>
          {
            errorMessage && (<p style={{textTransform: "capitalize", color: "red"}}>{errorMessage}</p>)
          }
         
            <label className={styles.label}>Email</label>
            <input className={styles.input} required placeholder="Email"  type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
            <label className={styles.label}>Password</label>
            <input className={styles.input} required  placeholder="Password" type="password" value={password} onChange={e =>setPassword(e.target.value)}/>      
          
           
          <button className={styles.button} type="submit">Sign in</button>
          <span className={styles.username}>Forgot Username/Password?</span>
        </div> 
       </form>
    </div>
    );
}

export default Signin;