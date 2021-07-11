import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import Critter from "../../components/Critter"

export const getStaticPaths = async () => {
  return {
    paths: [
      {params: { critterType: "fish" }},
      {params: { critterType: "bugs" }},
      {params: { critterType: "sea" }}
    ],
    fallback: false
  }
}

export const getStaticProps = async ({params: {critterType}}) => {
  const {data: critters} = await axios.get(`https://acnhapi.com/v1a/${critterType}`)

  return { props: { critters } }
}

const Critters = ({critters}) => {
  const router = useRouter()
  const { critterType } = router.query

  const crittersMapped = critters.map(critter => (
    <Critter 
      key={`${critter.id}:${critter.name["name-USen"]}`} 
      critter={critter}
    />
  ))

  return (
    <div>
      <Head>
        <title>Critterpedia | {critterType}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {crittersMapped}
      </div>
    </div>
  )
}

export default Critters