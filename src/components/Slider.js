import styles from '../styles/Slider.module.css'

export const Slider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h3 className={styles.title}>la fruta saludable <span>Aguacate</span></h3>
          <p className={styles.paragraph}>Fuente de vitaminas, potásio y ácido fólico, mejora tu sistema muscular y previene infecciones. Recomendado por nutricionistas. 
          <br/>Ven por el tuyo YA!</p>
        </div>
      </div>
    </section>
  )
}

