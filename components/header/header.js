
import Image from "next/image"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import navStyle from "../../styles/header.module.css"


const Header = props => {

    const {data} = useSession()
    
    
    return (
        <nav className={navStyle.nav}>
          <div className={navStyle.logo} >
            <Link href={`/`}>
               <Image src="/img/Betway_White.png" alt="" width="85" height="25" />
             </Link>
          </div> 
          <div className={navStyle.menu}>
             {
              data?.user && <span className={navStyle.user}>Welcome  {data?.user.name}</span>
             }    
              
            <ul>
               
              {
                data?.user ? ( 
                  <li>
                     <button onClick={() => signOut()} className={navStyle.button}>Log Out</button>           
                </li>  

                ) : (
                  <>
                  <li>
                    <Link href={`/signin`}>
                      <button className={navStyle.button}>Sign in</button>
                  </Link>           
                </li>

                 <li>
                <Link href={`/register`}>
                   <button className={navStyle.button_signup} >Sign up</button>
                </Link>  
                </li>   
              </>
                )
              }                 
            </ul>        
          </div>    
        </nav>
    );
}

export default Header;