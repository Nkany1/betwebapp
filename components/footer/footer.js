import style from "../../styles/footer.module.css"

const Footer = props => {
    return (
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.item}>
                <span className={style.title}>SPORT NEW CUSTOMER OFFER</span>
                <span className={style.subtitle}>Get up to R600 Free Bets</span>
                <button className={style.button}>Join Now</button> 
            </div>
          </div>      
        </div>
    );
}

export default Footer;