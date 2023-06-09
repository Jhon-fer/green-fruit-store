import Link from 'next/link'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerMenuTop}>
        <a href='tel:9652358741' className={styles.phoneNumberHome}><i></i>123 456 789</a>
        <a href='tel:888 777 6666' className={styles.phoneNumberMobile}><i></i>888 777 6666</a>
        <div className={styles.containerIcons}><a href='mailto:example@gmail.com' className={styles.email}><i></i>example@gmail.com</a></div>
      </div>
      <div className={styles.containerLogo}>
        <h2><Link href='/' className={styles.logo}>green fruit</Link></h2>
      </div>
      <nav className={styles.containerNav}>
        <div className={styles.searchIcon}><span>Buscar</span></div>
        <Link href='/login' className={styles.loginIcon}><span>Login</span></Link>
        <div className={styles.cartIcon}><span>Carrito</span></div>
      </nav>
    </header>
  )
}
