import Link from "next/link"
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.contact}>
          <h3 className={styles.title}>Información de Contacto</h3>
          <div>
            <a href='tel:3257412025' className={styles.links}>Phone: 888 777 6666</a>
            <a href='mailto:example@gmail.com' className={styles.links}>Email: example@gmail.com</a>
          </div>
        </section>
        <section className={styles.information}>
          <h3 className={styles.title}>Información</h3>
          <ul className={styles.containerLinks}>
            <Link href='/'><p className={styles.links}>¿Quienes Somos?</p></Link>
            <Link href='/'><p className={styles.links}>Pedidos</p></Link>
            <Link href='/'><p className={styles.links}>Partes y envíos</p></Link>
            <Link href='/'><p className={styles.links}>Garantía de devolución</p></Link>
            <Link href='/'><p className={styles.links}>Preguntas frecuentes</p></Link>
          </ul>
        </section>
        <section className={styles.rrss}>
        <h3 className={styles.title}>Redes Sociales</h3>
        <ul className={styles.containerRRSS}>
          <Link href='https://www.facebook.com' target="_blank"><p className={styles.links}>Facebook</p></Link>
          <Link href='https://www.youtube.com' target="_blank"><p className={styles.links}>YouTube</p></Link>
          <Link href='https://www.twitter.com' target="_blank"><p className={styles.links}>Twitter</p></Link>
        </ul>
        </section>
      </div>
      <div className={styles.attribution}>
        Develop by 
        <Link href='https://github.com/Jhon-fer' target="_blank">
          <span> Jhon Rios</span>
        </Link>
      </div>
    </footer>
  )
}
