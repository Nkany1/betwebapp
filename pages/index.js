import Link from "next/link";
import Nav from "../components/navigation/nav";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div 
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "66vh",
      justifyContent: "center",
      color: "green",
      marginTop: "30px"
    }}
    >
       Home
    </div>
  )
}
