import Link from "next/link";
import Image from "next/image";
import { Counter } from "@/components/Counter";
import styles from '../../styles/Product.module.css'

export default function Post({ product }) {
  const info = [product]

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        {
          info.map((item, id) => {
            return (
              <div key={id} className={styles.card}>
                <article className={styles.containerCard}>
                  <Image 
                    src={`https://platzi-avo.vercel.app/${item.image}`}
                    alt={`This images is about ${item.title}`}
                    width={300}
                    height={300}
                    priority
                    className={styles.image}
                  />
                  <div className={styles.containerInfo}>
                    <h2 className={styles.title}>{item.name}</h2>
                    <p className={styles.sku}>SKU: {item.sku}</p>
                    <p className={styles.price}><span>Precio:</span> ${item.price}</p>
                    <div>
                      <Counter />
                    </div>
                  </div>
                </article>

                <article className={styles.containerText}>
                  <h3>Descripción</h3>
                  <p>{item.attributes.description}</p>
                </article>

                <article className={styles.productsRelated}>
                  <h3>Productos relacionados - Próximamente...</h3>
                  
                </article>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data } = await res.json()
  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://platzi-avo.vercel.app/api/avo/${params.id}`)
  const product = await res.json()

  return {
    props: { product }
  }
}
