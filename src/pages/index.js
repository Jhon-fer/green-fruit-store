import Image from "next/image"
import Link from "next/link"
import { Slider } from "@/components/Slider"
import styles from '../styles/Home.module.css'

export default function index({ info }) {
  return (
    <main className={styles.main}>
      <Slider />
      <section className={styles.container}>
        <h1 className={styles.titleMain}>productos recientes</h1>
        <div className={styles.containerProducts}>
          {
            info.map((item, id) => {
              return (
                <article key={id} className={styles.card}>
                  <Image 
                    src={`https://platzi-avo.vercel.app/${item.image}`}
                    alt={`This images is about ${item.title}`}
                    width={300}
                    height={300}
                    priority
                    className={styles.image}
                  />
                  <h2 className={styles.productName}>{item.name}</h2>
                  <p className={styles.price}>$ {item.price}</p>
                  <Link href={`/product/${item.id}`}>
                  <button className={styles.buttonMore}>Ver más</button>
                  </Link>
                </article>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data } = await res.json()

  return {
    props: {
      info: data
    }
  }
}
