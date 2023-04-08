import Image from "next/image"
import Link from "next/link"
import { Slider } from "@/components/Slider"
import styles from '../styles/Home.module.css'

export default function index({ info }) {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Slider />
        <h1 className={styles.titleMain}>Biendenivos a la tienda online de Aguacates</h1>
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
                <Link href={`/product/${item.id}`}>
                  <h2 className={styles.productName}>{item.name}</h2>
                </Link>
                <p className={styles.price}>${item.price}</p>
              </article>
            )
          })
        }
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
