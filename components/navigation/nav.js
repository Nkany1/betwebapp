import Link from "next/link";
import {useState} from "react"
import styles from '../../styles/Nav.module.css'
import NavItem from "./navItem";



const MENU_LIST = [

  {
    text: "sports",
    href:"/sports"
  },{
    text: "Live",
    href : "/live"
  },{
    text: "casino",
    href: "/casino"
  },{
    text: "eSport",
    href: "/esport"
  },{
    text: "Vegas",
    href: "/vegas"
  }
  
]

const Nav = props => {
    
    const[navActive , setNavActive] = useState(false)
    const [activeIndex , setActiveIndex] = useState(0);

    return (
      <div className="nav_container">
      <nav className="nav">
        <div className={`${navActive ? "active" : ""} nav_menu_list`}>
         {
          MENU_LIST.map((menu, index) => {
            return(
              <div 
                onClick={
                  () => {
                    setActiveIndex(index);
                    setNavActive(false)
                  }
                }
              
              key={menu.text}>
               <NavItem active={activeIndex === index} {...menu} />
              </div>
            )
          })
         } 
      </div>
    </nav>
      
      </div>
     
    );
}

export default Nav;

/*
{<div className={styles.container}>
        <Link href={`/sports`}>
          <span className={styles.link}>Sport</span>
        </Link>
        <Link href={`/live`} >
          <span className={styles.link}>Live & real</span>
        </Link> 

        <Link href={`/casino`} >
         <span className={styles.link}>Casino</span>
        </Link> 

       <Link href={`/esport`} >
         <span className={styles.link}>Esport</span>
       </Link>  
     
        <Link href={`/vegas`} >
           <span className={styles.link}>Vegas</span>
        </Link> 
      </div>}*/