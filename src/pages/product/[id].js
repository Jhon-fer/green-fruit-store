import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Product.module.css'

export default function Post({ product }) {
  const info = [product]
  return (
    <main className={styles.main}>
      <section className={styles.container}>
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
              <h2 className={styles.title}>{item.name}</h2>
              <p className={styles.paragraph}>{item.attributes.description}</p>
              <p className={styles.price}>{item.price}</p>
            </article>
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
