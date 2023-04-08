import Link from "next/link";
import Image from "next/image";

export default function Post({ product }) {
  const info = [product]
  return (
    <div>
      {
        info.map((item, id) => {
          return (
            <article key={id}>
            <Image 
              src={`https://platzi-avo.vercel.app/${item.image}`}
              alt={`This images is about ${item.title}`}
              width={300}
              height={300}
              priority
            />
            <h2>{item.name}</h2>
            <p>{item.attributes.description}</p>
            <p>{item.price}</p>
          </article>
          )
        })
      }
      <Link href='/'>Regresar a home</Link>
    </div>
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
